import {ChangeDetectorRef, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, filter, map, Subscription, switchMap, tap} from "rxjs";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Pipe({
  name: 'authenticate',
  pure: false
})
export class AuthenticatePipe implements PipeTransform, OnDestroy {

  private subscription = new Subscription();
  private transformValue = new BehaviorSubject<string>('');

  private latestValue!: string | SafeUrl;

  constructor(private httpClient: HttpClient,
              private domSanitizer: DomSanitizer,
              private cdr: ChangeDetectorRef) {
    // every pipe instance will set up their subscription
    this.setUpSubscription();
  }

  // ...

  transform(imagePath: string): string | SafeUrl {
    // we emit a new value
    this.transformValue.next(imagePath);

    // we always return the latest value
    return this.latestValue;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private setUpSubscription(): void {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};

    const transformSubscription = this.transformValue
      .asObservable()
      .pipe(
        filter((v): v is string => !!v),
        distinctUntilChanged(),
        switchMap((imagePath: string) => this.httpClient
          .get(imagePath, {headers: headers, observe: 'response', responseType: 'blob'})
          .pipe(
            map((response: HttpResponse<Blob>) => {
              if (response.body !== null)
                return URL.createObjectURL(response.body);
              else return '';
            }),
            map((unsafeBlobUrl: string) => this.domSanitizer.bypassSecurityTrustUrl(unsafeBlobUrl)),
            filter((blobUrl) => blobUrl !== this.latestValue),
          )
        ),
        tap((imagePath: string | SafeUrl) => {
          this.latestValue = imagePath;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
    this.subscription.add(transformSubscription);
  }
}

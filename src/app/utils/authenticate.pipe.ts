import {ChangeDetectorRef, OnDestroy, Pipe, PipeTransform} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, filter, map, Subscription, switchMap, tap} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {HttpClient, HttpResponse} from "@angular/common/http";

@Pipe({
  name: 'authenticate',
  pure: false
})
export class AuthenticatePipe implements PipeTransform, OnDestroy {

  private subscription = new Subscription();
  private transformValue = new BehaviorSubject<string>('');

  private latestValue!: string;

  constructor(private httpClient: HttpClient,
              private domSanitizer: DomSanitizer,
              private cdr: ChangeDetectorRef) {
    this.setUpSubscription();
  }

  transform(imagePath: string): string {
    this.transformValue.next(imagePath);
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
            })
          )
        ),
        tap((imagePath: string) => {
          this.latestValue = imagePath;
          this.cdr.markForCheck();
        })
      )
      .subscribe();
    this.subscription.add(transformSubscription);
  }
}

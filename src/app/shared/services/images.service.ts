import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Image} from "../models/Image";
import {Page} from "../models/Page";
import {ImageDetails} from "../models/ImageDetails";
import {ImageCreation} from "../models/ImageCreation";

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) {
  }

  createImage(image: ImageCreation, file: File) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    const formData = new FormData();
    formData.append("imageDetails", new Blob([JSON.stringify(image)], {type: "application/json"}));
    formData.append("imageFile", file)
    return this.http.post<Image>(environment.apiEndPoint + '/images', formData, {
      headers: headers,
      observe: 'response'
    });
  }

  getImages(page = 0, sort = "id", asc: boolean = true, size = 20) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<Page<Image>>(`${environment.apiEndPoint}/images?size=${size}&page=${page}&sort=${sort},${asc ? 'asc' : 'desc'}`, {headers: headers});
  }

  getImageDetails(id: string) {
    const headers: { Authorization: string } = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
    return this.http.get<ImageDetails>(`${environment.apiEndPoint}/images/details/${id}`, {
      headers: headers,
      observe: 'response'
    });
  }

}

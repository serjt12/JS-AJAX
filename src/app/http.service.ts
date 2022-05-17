import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) { }

  sendGetRequest(apiUrl: string) {
    return this.httpClient.get(apiUrl, {observe: 'response'});
  }
}

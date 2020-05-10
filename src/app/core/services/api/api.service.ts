import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost:4200/api';

  constructor(private httpClient: HttpClient) {}

  get<T>(route: string) {
    return this.httpClient.get<T>(`${this.baseUrl}/${route}`);
  }

  post<T>(route: string, data: any) {
    return this.httpClient.post<T>(`${this.baseUrl}/${route}`, data);
  }

  put<T>(route: string, data: any) {
    return this.httpClient.put<T>(`${this.baseUrl}/${route}`, data);
  }

  delete<T>(route: string) {
    return this.httpClient.delete<T>(`${this.baseUrl}/${route}`);
  }
}

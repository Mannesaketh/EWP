import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpaPackage } from '../models/package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private apiUrl = 'http://localhost:3000/api/packages';

  constructor(private http: HttpClient) {}

  getPackages(): Observable<SpaPackage[]> {
    return this.http.get<SpaPackage[]>(this.apiUrl);
  }
}

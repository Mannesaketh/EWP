import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transport } from '../models/transport';
@Injectable({ providedIn: 'root' })
export class TransportService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/api/transport';
  getTransports(): Observable<Transport[]> { return this.http.get<Transport[]>(this.apiUrl); }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private apiUrl = environment.librosURL;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  /* Información */
  getSugerencias(keyword: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/info/autocomplete?keyword=${keyword}`);
  }

  getInfo(libro: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/info/search?q=${libro}`);
  }

}

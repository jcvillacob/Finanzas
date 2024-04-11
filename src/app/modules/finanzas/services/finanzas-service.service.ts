import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanzasServiceService {
  private apiUrl = environment.apiURL;

  constructor(private http: HttpClient) { }

  /* Cuentas */
  getCuentas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cuentas/usuario/1`);
  }

  createCuenta(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cuentas`, data);
  }

  deleteCuenta(cuentaId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/cuentas/${cuentaId}`);
  }


  /* Transacciones */
  getTransaccionByCuenta(cuentaId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transacciones/cuenta/${cuentaId}`);
  }

  getTransaccionByUser(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transacciones/usuario/1`);
  }

  getGastosMes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/transacciones/gastosmes/1`);
  }

  createTransaccion(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transacciones`, data);
  }

  /* Transferencias */
  createTransferencia(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transferencias`, data);
  }

  /* Deudas */
  getDeudas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/deudas/usuario/1`);
  }


  /* Presupuesto */
  getPresupuesto(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/presupuesto/usuario/1`);
  }


  /* Categorias */
  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categorias`);
  }

  createCategoria(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/categorias`, data);
  }

}

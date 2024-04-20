import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { AuthService } from 'src/app/core/authentication/auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FinanzasServiceService {
  private apiUrl = environment.apiURL;
  private updateNotifier = new Subject<void>();
  usuarioID!: number;

  constructor(private http: HttpClient, private authService: AuthService) {
  }

  // Método para obtener el observable del notifier
  getUpdateNotifier() {
    return this.updateNotifier.asObservable();
  }

  // Método para emitir notificaciones
  notifyUpdates() {
    this.updateNotifier.next();
  }

  /* Cuentas */
  getCuentas(): Observable<any[]> {
    const usuarioID = this.authService.getUsuarioID();
    return this.http.get<any[]>(`${this.apiUrl}/cuentas/usuario/${usuarioID}`);
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
    const usuarioID = this.authService.getUsuarioID();
    return this.http.get<any[]>(`${this.apiUrl}/transacciones/usuario/${usuarioID}`);
  }

  getGastosMes(): Observable<any[]> {
    const usuarioID = this.authService.getUsuarioID();
    return this.http.get<any[]>(`${this.apiUrl}/transacciones/gastosmes/${usuarioID}`);
  }

  createTransaccion(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transacciones`, data).pipe(
      tap(() => this.notifyUpdates()) // Notificar después de una operación exitosa
    );
  }

  deleteTransaccion(transaccionId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/transacciones/${transaccionId}`).pipe(
      tap(() => this.notifyUpdates()) // Notificar después de una operación exitosa
    );
  }

  /* Transferencias */
  createTransferencia(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/transferencias`, data).pipe(
      tap(() => this.notifyUpdates()) // Notificar después de una operación exitosa
    );
  }

  /* Deudas */
  getDeudas(): Observable<any[]> {
    const usuarioID = this.authService.getUsuarioID();
    return this.http.get<any[]>(`${this.apiUrl}/deudas/usuario/${usuarioID}`);
  }

  createDeuda(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/deudas`, data);
  }

  deleteDeuda(deudaId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/deudas/${deudaId}`);
  }


  /* Pagos Deudas */
  getPagosDeudas(deudaID: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/pago-deudas/${deudaID}`);
  }

  createPagosDeudas(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/pago-deudas`, data);
  }

  /* Presupuesto */
  getPresupuesto(): Observable<any[]> {
    const usuarioID = this.authService.getUsuarioID();
    return this.http.get<any[]>(`${this.apiUrl}/presupuesto/usuario/${usuarioID}`);
  }

  createPresupuesto(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/presupuesto`, data);
  }

  deletePresupuesto(presupuestoId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/presupuesto/${presupuestoId}`);
  }


  /* Categorias */
  getCategorias(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/categorias`);
  }

  createCategoria(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/categorias`, data);
  }

  /* Metas */
  getMetas(): Observable<any[]> {
    const usuarioID = this.authService.getUsuarioID();
    return this.http.get<any[]>(`${this.apiUrl}/metas/usuario/${usuarioID}`);
  }

  crearMeta(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/metas`, data);
  }

  /* Avances Metas */
  getAvancesMetas(metaID: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/avances-metas/${metaID}`);
  }

  crearAvanceMeta(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/avances-metas`, data);
  }

  /* Recurrentes */
  getRecurrentes(): Observable<any[]> {
    const usuarioID = this.authService.getUsuarioID();
    return this.http.get<any[]>(`${this.apiUrl}/recurrentes/usuario/${usuarioID}`);
  }

  crearRecurrente(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/recurrentes`, data);
  }

  deleteRecurrente(recurrenteId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/recurrentes/${recurrenteId}`);
  }

}

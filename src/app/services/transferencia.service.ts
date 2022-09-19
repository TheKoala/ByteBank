import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listatransferencias: any []

  constructor() {
    this.listatransferencias = []
  }

  get transferencias(){
    return this.listatransferencias;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listatransferencias.push(transferencia);
  }

  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }
}

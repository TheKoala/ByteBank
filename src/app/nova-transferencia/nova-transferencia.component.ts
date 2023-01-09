import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: string;

  constructor(private service: TransferenciaService, private router:Router) { }

  transferir() {

    //'this.aoTransferir.emit({valor: this.valor, destino: this.destino});'

    const transferencia: Transferencia = { valor: this.valor, destino: this.destino }

    this.service.adicionar(transferencia).subscribe(resultado => {
      console.log(resultado)
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
      (error) => console.error(error)
    )
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }

}

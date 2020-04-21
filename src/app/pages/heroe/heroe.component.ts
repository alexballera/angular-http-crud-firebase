import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {
      console.log('Formulario inválido');
      return;
    }

    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      icon: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this.heroesService.actualizarHeroe(this.heroe);
    } else {
      peticion = this.heroesService.crearHeroe(this.heroe);
    }

    peticion.subscribe(resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizó correctamente',
        icon: 'success',
      });
    });

  }

}

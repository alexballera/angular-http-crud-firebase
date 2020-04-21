import { HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';
import { HeroeModel } from '../../models/heroe.model';
import { NgForm } from '@angular/forms';

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

    if (this.heroe.id) {
      this.heroesService.actualizarHeroe(this.heroe)
      .subscribe(resp => {
        console.log(resp);
      });
    } else {
      this.heroesService.crearHeroe(this.heroe)
      .subscribe(resp => {
        console.log(resp);
        this.heroe = resp;
      });
    }

  }

}

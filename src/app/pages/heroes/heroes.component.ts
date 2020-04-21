import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../models/heroe.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];

  constructor(private heroesServices: HeroesService) { }

  ngOnInit() {
    this.heroesServices.getHeroes()
    .subscribe(resp => this.heroes = resp);
  }

  borrarHeroe(heroe: HeroeModel, i: number) {

    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar a ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) {
        this.heroes.splice(i, 1);
        this.heroesServices.borrarHeroe(heroe.id).subscribe();
      }
    });
  }

}

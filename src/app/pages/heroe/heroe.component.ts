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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    if (form.invalid) {
      console.log('Formulario inválido');
      return;
    }
    console.log(form);
    console.log(this.heroe);
  }

}

import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from '../../services/publicaciones.service';
import { PublishInterface } from '../../models/publishInterface';
import{FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-add-publish',
  templateUrl: './add-publish.component.html',
  styleUrls: ['./add-publish.component.css']
})

export class AddPublishComponent implements OnInit {
  publicacion: PublishInterface = {
    textPublication: '',
    fecha:'',
  };

  constructor(private pubServicio: PublicacionesService) { }

  ngOnInit() {
  }

  newPublish(myForm: NgForm) {
    let fecha = Date.now();
    this.publicacion.fecha = fecha;
    this.pubServicio.addPublish();
  
  }

  
}
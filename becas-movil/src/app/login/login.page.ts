import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {NgForm} from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async onSubmit(f: NgForm) {
    if (!f.valid) {
      const alert = await this.alertController.create({
        header: 'Error',
        subHeader: '',
        message: '<strong>Ha ocurrido un error con el formulario</strong><br> Por favor, revise todos los campos',
        buttons: ['Dale']
      });

      await alert.present();

      return;
    }

    
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
    
  }

}

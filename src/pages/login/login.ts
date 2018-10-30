import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public user: string;
  public password: string;
  public isLogged: boolean;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {}

  loguear() {
    console.log(this.user);
    console.log(this.password);
    if (this.user == "admin" && this.password == "adminadmin") {
      console.log("login correcto");
      this.navCtrl.setRoot(TabsPage);
    } else {
      console.log("login incorrecto");
      this.showAlert();
    }
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: "Login incorrecto!",
      subTitle:
        "Las credenciales ingresadas son incorrectas...",
      buttons: ["OK"]
    });
    alert.present();
  }
}

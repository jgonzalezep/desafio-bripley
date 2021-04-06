import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public loadingController: LoadingController) {}

  async ngOnInit() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Extrayendo datos...',
      duration: 15000,
    });
    await loading.present();
    const city = await this.consultaSprintBoot();
    const weather = await this.consultaWeather(city.latitude, city.longitude);

    localStorage.setItem('ip', city.ip);
    localStorage.setItem('city', city.city);
    localStorage.setItem('min', weather.dataseries[0].temp2m.min);
    localStorage.setItem('max', weather.dataseries[0].temp2m.max);
    //localStorage.setItem('weather', weather.toString());
  }

  async consultaSprintBoot() {
    return await fetch('http://localhost:8080/').then((data) => {
      return data.json();
    });
  }

  async consultaWeather(la, lo) {
    return await fetch(
      `http://www.7timer.info/bin/civillight.php?lon=${lo}&lat=${la}&ac=0&unit=metric&output=json`
    ).then((data) => {
      return data.json();
    });
  }
}

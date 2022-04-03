import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  public GETMahasiswa: any;
  public DELMahasiswa: any;
  constructor(
    private http: HttpClient,
    private toast: ToastController
  ) { }


  ionViewWillEnter() {
    this._GetData();
  }
 
  
  _GetData() {
    let data: Observable<any>;
    data = this.http.get('http://localhost/CodeIgniter_API/index.php/api/GetData');
    data.subscribe(result => {
      this.GETMahasiswa = result;
      console.log(result);
    });
  }

  public deleteData(id) {
    let data: Observable<any>;
    data = this.http.get('http://localhost/CodeIgniter_API/index.php/Api/DeleteData/' + id);
    data.subscribe((result) => {
      this.DELMahasiswa = result;
      console.log(result.status);
      if (result.status === 'Ok') {
        alert('Delete Data Successfully!');
        this.ionViewWillEnter();
      }
    });
  }

}





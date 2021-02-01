import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.page.html',
  styleUrls: ['./materiel.page.scss'],
})
export class MaterielPage implements OnInit {

  // VARIABLE
  server;
  materiel;
  arrayMatos = [];
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { 
    this.server = authService.server;
  }

  ngOnInit() {
    this.authService.userId.subscribe(user_id => {
      console.log(user_id);
      let body = {
        user_id: user_id
      };
      this.http.post(this.server + 'getMateriel.php', body).subscribe(resData => {
        this.materiel = resData['list_matos'];
        this.arrayMatos = resData['id_matos_user'];
        console.log(this.materiel)
      });
    });
    
  }

  getMatos(mat: Object) {

    mat['picked'] = !mat['picked'];

    //console.log(this.arrayMatos);
  if (this.arrayMatos.includes(mat['unique_id']) == false) {
         this.arrayMatos.push(mat['unique_id']);
  }  else {

    if (this.arrayMatos.length == 1 ) {
      console.log('un seul');
      this.arrayMatos = [];
    } else {
      let index = this.arrayMatos.indexOf(mat['unique_id']);
      this.arrayMatos.splice(index,index);
    }

  }
  console.log(this.arrayMatos);
  } 

  sendMateriel() {
    console.log(this.arrayMatos);
    let body = {
      id_materiel: this.arrayMatos
    };
    this.authService.userId.subscribe(user_id => {
      let id = {
        user_id: user_id
      }
      Object.assign(body,id);
      console.log(body);
      this.http.post(this.server + 'saveMateriel.php',body).subscribe(resData => {
        console.log(resData);
      })
    })
  } 

}

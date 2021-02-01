import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-mes-seances-saved',
  templateUrl: './mes-seances-saved.page.html',
  styleUrls: ['./mes-seances-saved.page.scss'],
})
export class MesSeancesSavedPage implements OnInit {
  server;
  seances;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {
    this.server = this.authService.server;
   }

  ngOnInit() {

    this.authService.userId.subscribe(userId => {
      let body = {
        user_id: userId
      };
      this.http.post(this.server + 'getMesSeancesSaved.php',body).subscribe(resData => {
        console.log(resData);
        this.seances = resData;
      })
    })


  }

  goToDoSeance(selected_seance: any) {
    console.log(selected_seance);
    this.router.navigate(['./menu/ap/do-seance'], {state: {selected_seance}});
  }


}

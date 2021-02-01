import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SaveQuestionnaireService {
  server;

  constructor(
    private authService: AuthService,
    private http: HttpClient
    ) { 
      this.server = this.authService.server;
    }

    saveQuestionnaire(result: Object,database: string) {
      return this.authService.userId.pipe(
        take(1),
        switchMap(userId => {
          let user_id = {user_id: userId};
          let db = {db:database}
          Object.assign(result,user_id);
          Object.assign(result,db);
          return this.http.post(this.server + 'saveQuestionnaire.php', result);
        })
      )
    }

    validateActivity(result:Object) {
      return this.authService.userId.pipe(
        take(1),
        switchMap(userId => {
          let user_id = {user_id: userId};
          Object.assign(result,user_id);
          return this.http.post(this.server + 'saveActivity.php', result);
        })
      )
    }
}

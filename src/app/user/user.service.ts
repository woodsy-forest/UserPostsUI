import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService {


  constructor(private http: HttpClient) { }

  GetUsers(): Observable<any> {
    
    const url: string = environment.api_url + '/user';

    if (environment.debug_mode) {
      console.log("GetUsers: " + url);
    }

    return this.http.get(url);

  }

  GetUserDetails(id: number): Observable<any> {
    
    const url: string = environment.api_url + '/user/'+id;

    if (environment.debug_mode) {
      console.log("GetUserDetails: " + url);
    }

    return this.http.get(url);

  }

}

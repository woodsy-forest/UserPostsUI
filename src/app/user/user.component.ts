import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDto } from '../DTOs/UserDto'

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
  })
export class UserComponent  implements OnInit { 

    public ShowLoading = true;
    public users: UserDto[] = [];

    constructor (private router: Router,
      private userService: UserService) {}


    ngOnInit(): void {


        this.ShowLoading = true;
   
        // --------------------------------------------
        // Get Users - begin
        // --------------------------------------------
    
          this.userService.GetUsers()
            .subscribe(
              (response: UserDto[]) => {
                if (environment.debug_mode) {
                  console.log("GetUsers, response: " + JSON.stringify(response));
                }
                this.users = response;
                this.ShowLoading = false;
              }
              ,
              (err: HttpErrorResponse) => {
                this.ShowLoading = false;
                console.log(err);
                alert("ERROR - STATUS: " + err.status + " - MESSAGE: " + err.error);
              }
          );

        // --------------------------------------------
        // Get Users - end
        // --------------------------------------------
    }
           
    
}




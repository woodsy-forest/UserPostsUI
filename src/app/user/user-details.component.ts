import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { UserService } from './user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UserDetailsDto } from '../DTOs/UserDetailsDto'

@Component({
    selector: 'user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
  })
export class UserDetailsComponent  implements OnInit { 

    public ShowLoading = true;
    public userDetails: UserDetailsDto;
    public userId: number;

    constructor (private route: ActivatedRoute,
      private userService: UserService) {}


    ngOnInit(): void {

        this.userId = Number(this.route.snapshot.paramMap.get('id'));


        this.ShowLoading = true;
   
        // --------------------------------------------
        // Get UserDetails - begin
        // --------------------------------------------
    
          this.userService.GetUserDetails(this.userId)
            .subscribe(
              (response: UserDetailsDto) => {
                if (environment.debug_mode) {
                  console.log("GetUserDetails, response: " + JSON.stringify(response));
                }
                this.userDetails = response;
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
        // Get UserDetails - end
        // --------------------------------------------
    }
            
    
}




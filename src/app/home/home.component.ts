import { Component } from '@angular/core';
import { first } from 'rxjs/operators';



import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    currentUser: User;
    userFromApi: User;
    declare const Twilio: any;
  require: any;

    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.userFromApi = user;
        });
    }
    clickToCall() { alert('Fired');

    const accountSid = 'AC4ac4f32b3d763236620361c269232c26';
    const authToken = 'b9942ca5a628f6bcaf793266b863a9d9';
    const client = require('twilio')(accountSid, authToken);
    client.calls
          .create({
             url: 'http://demo.twilio.com/docs/voice.xml',
             to: '+917892855462',
             from: '+15017122661'
           })
          .then(call => console.log(call.sid))
          .done();



}
}

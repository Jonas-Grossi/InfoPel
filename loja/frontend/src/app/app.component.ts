import { AuthService } from './components/login/auth.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
 templateUrl:'app.component.html'
})
export class AppComponent {
    showMenu: boolean = false

constructor(private authService:AuthService){



}

ngOnInit(){

 this.authService.showMenuEmmitter.subscribe(
   show   => this.showMenu = show

 )

}
  }

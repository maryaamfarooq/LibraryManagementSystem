import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostLoginService } from '../post-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  response = "";
  userType = "";

  constructor(private router: Router, private loginService: PostLoginService) { }

  onSend(username: string, pass: string): void {

    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', pass); 

    this.loginService.onSendService(formData).subscribe
    (res => {
      this.userType = res;
      if(this.userType == "manager"){
        this.router.navigateByUrl("/manager");
      }
      else if(this.userType == "supplier"){
        this.router.navigateByUrl("/supplier");
      }
      else if(this.userType == "student" || this.userType == "faculty"){
        this.router.navigateByUrl("/student");
      }
    });

    localStorage.setItem("username", username);


  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostLoginService } from '../post-login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  response = "";

  constructor(private router: Router, private loginService: PostLoginService) { }

  onSend(fname: string, lname: string, username: string, pass: string, user_type: string): void {

      const formData = new FormData();
      formData.append('first_name', fname);
      formData.append('last_name', lname);
      formData.append('new_username', username);
      formData.append('new_password', pass); 
      formData.append('user_type', user_type);
  
      this.loginService.onSendService(formData).subscribe
      (res=> {
        this.response = res;
      });

      localStorage.setItem("username", username);
      this.router.navigateByUrl('/student');
  
  }

  ngOnInit(): void {
  }

}

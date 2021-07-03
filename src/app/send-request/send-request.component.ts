import { Component, OnInit } from '@angular/core';
import { PostLoginService } from '../post-login.service';

@Component({
  selector: 'app-send-request',
  templateUrl: './send-request.component.html',
  styleUrls: ['./send-request.component.css']
})
export class SendRequestComponent implements OnInit {

  response:any;
  username: any;

  constructor(private loginService: PostLoginService) { }

  submitRequest(book_name: string, book_author: string): void {

      const formData = new FormData();
      this.username = localStorage.getItem("username");
      formData.append('username', this.username);
      formData.append('book_name', book_name);
      formData.append('book_author', book_author);
  
      this.loginService.sendRequest(formData).subscribe
      (res=> {
        this.response = res;
      });
  
  }

  ngOnInit(): void {
  }

}

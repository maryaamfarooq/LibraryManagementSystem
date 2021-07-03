import { Component, OnInit } from '@angular/core';
import { PostLoginService } from '../post-login.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  response:any;

  constructor(private loginService: PostLoginService) { }

  submitBook(book_id:string,book_name: string,author_name:string,year_published:string,description:string,book_status:string): void {

      const formData = new FormData();
      formData.append('book_id', book_id);
      formData.append('book_name', book_name);
      formData.append('author_name', author_name);
      formData.append('year_published', year_published);
      formData.append('description', description); 
      formData.append('book_status', book_status);
  
      this.loginService.addBook(formData).subscribe
      (res=> {
        this.response = res;
      });
  
  }

  ngOnInit(): void {
  }

}

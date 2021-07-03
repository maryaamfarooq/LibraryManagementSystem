import { Component, OnInit } from '@angular/core';
import { PostLoginService } from '../post-login.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  books: Book[];
  issue: any | undefined;
  response = "";
  username: any;

  constructor(private loginService: PostLoginService) { 

    this.books = [];

  }

  ngOnInit(): void {

    this.loginService.getBooks().subscribe
    (res=> {
      for (var i = 0; i < res.length; i++)  
        this.books.push({
          book_id: JSON.stringify(res[i].book_id).replace('"','').replace('"',''),
          book_name: JSON.stringify(res[i].book_name).replace('"','').replace('"',''),
          author_name: JSON.stringify(res[i].author_name).replace('"','').replace('"',''),
          year_published: JSON.stringify(res[i].year_pub).replace('"','').replace('"',''),
          description: JSON.stringify(res[i].description).replace('"','').replace('"','')
          }
        )
    },

    err=>{
      console.log(err);
    }
    );
  }

  requestIssuance(book_id: any){

    const formData = new FormData();
    // formData.append('username', username);
    this.username = localStorage.getItem("username");
    formData.append('username', this.username);
    formData.append('book_id', book_id);

    this.loginService.sendIssueRequest(formData).subscribe(
      res => {
        this.response = res;
      },
      err=>{
        console.log(err);
      }
    )

  }

}

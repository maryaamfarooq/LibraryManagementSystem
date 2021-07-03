import { Component, OnInit } from '@angular/core';
import { PostLoginService } from '../post-login.service';
import { IssueRequest } from 'src/app/models/issue_request';

@Component({
  selector: 'app-issue-request',
  templateUrl: './issue-request.component.html',
  styleUrls: ['./issue-request.component.css']
})
export class IssueRequestComponent implements OnInit {

  issue_request: IssueRequest[];
  issue: any | undefined;
  response = '';

  constructor(private loginService: PostLoginService) { 
    this.issue_request = [];
  }

  ngOnInit(): void {

    this.loginService.getIssueRequest().subscribe
    (res=> {
      for (var i = 0; i < res.length; i++)  
        this.issue_request.push({
          req_id: JSON.stringify(res[i].req_id).replace('"','').replace('"',''),
          username: JSON.stringify(res[i].username).replace('"','').replace('"',''),
          date_of_request: JSON.stringify(res[i].date_of_request).replace('"','').replace('"',''),
          book_id: JSON.stringify(res[i].book_id).replace('"','').replace('"',''),
          book_name: JSON.stringify(res[i].book_name).replace('"','').replace('"',''),
          author_name: JSON.stringify(res[i].author_name).replace('"','').replace('"','')
        }
      )
    },
    err=>{
      console.log(err);
    }
    )
  }

approveRequest(req_id: any, book_id: any, id:number): void{

  const formData = new FormData();
  formData.append('req_id', req_id);
  formData.append('book_id', book_id);
this.issue_request=this.issue_request.filter((v,i)=>i!==id);
  this.loginService.approveRequest(formData).subscribe(
    res=>{
      this.response = res;
    }
  )
}

}

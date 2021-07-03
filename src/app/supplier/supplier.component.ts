import { Component, OnInit } from '@angular/core';
import { PostLoginService } from '../post-login.service';
import {Supplies} from 'src/app/models/supplies';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplies:Supplies[];
  response = "";

  constructor(private loginService: PostLoginService) { 
    this.supplies=[];
  }

  ngOnInit(): void {

    this.loginService.getSupplyRequests().subscribe
    (res=> {
      for (var i = 0; i < res.length; i++)  
      this.supplies.push({
        req_id:JSON.stringify(res[i].req_id).replace('"','').replace('"',''),
        username:JSON.stringify(res[i].username).replace('"','').replace('"',''),
        date_of_request:JSON.stringify(res[i].date_of_request).replace('"','').replace('"',''),
        supp_req_status:JSON.stringify(res[i].supp_req_status).replace('"','').replace('"',''),
        book_name:JSON.stringify(res[i].book_name).replace('"','').replace('"',''),
        author_name:JSON.stringify(res[i].author_name).replace('"','').replace('"','')
      }
      )
    },
    err=>{
      console.log(err);
    }
    );
  }

  approveRequest(req_id: any,id:number): void{

    const formData = new FormData();
    formData.append('req_id', req_id);
    this.supplies=this.supplies.filter((v,i)=>i!==id);
    this.loginService.supplierRequest(formData).subscribe(
      res=>{
        this.response = res;
      }
    )
  }

}



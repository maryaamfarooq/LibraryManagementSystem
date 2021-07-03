import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostLoginService {

  constructor(private http: HttpClient) { };

  onSendService(formData: FormData): Observable<any> {
    return this.http.post('http://new.ataleek.com:5203/login.php', formData, {responseType: 'text'});
  }

  getBooks(): Observable<any> {
    return this.http.get('http://new.ataleek.com:5203/books.php');
  }

  getSupplyRequests(): Observable<any> {
    return this.http.get('http://new.ataleek.com:5203/supplier.php');
  }
  
  getIssueRequest(): Observable<any> {
    return this.http.get('http://new.ataleek.com:5203/issue-request.php');
  }

  sendIssueRequest(formData: FormData): Observable<any> {
    return this.http.post('http://new.ataleek.com:5203/send-issue-request.php', formData, {responseType: 'text'});
  }

  approveRequest(formData: FormData): Observable<any> {
    return this.http.post('http://new.ataleek.com:5203/approve-request.php', formData, {responseType: 'text'});
  }

  addBook(formData: FormData): Observable<any> {
    return this.http.post('http://new.ataleek.com:5203/add-book.php', formData, {responseType: 'text'});
  }

  sendRequest(formData: FormData): Observable<any> {
    return this.http.post('http://new.ataleek.com:5203/send-request.php', formData, {responseType: 'text'});
  }

  supplierRequest(formData: FormData): Observable<any> {
    return this.http.post('http://new.ataleek.com:5203/supplier-request.php', formData, {responseType: 'text'});
  }

}


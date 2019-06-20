import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ContactDto} from './contact.dto';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {
  private static BASE_URL = "https://contacts-telran.herokuapp.com";
  constructor(private client:HttpClient){}


  sendContact(contact:ContactDto):Observable<ContactDto>{
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': localStorage.getItem("token")
    });

    return this.client.post<ContactDto>(
      HttpService.BASE_URL + "/api/contact",
      contact,
      {
        headers:headers
      }
    );
  }
}

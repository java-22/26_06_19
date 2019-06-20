import {Component, OnInit} from '@angular/core';
import {HttpService} from '../data/http.service';
import {ContactDto} from '../data/contact.dto';
import {parseHttpResponse} from 'selenium-webdriver/http';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  name = '';
  lastName = '';
  email = '';
  address = '';
  phone = '';
  description = '';

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
  }

  addContact() {
    let contact = new ContactDto(this.name,
      this.lastName,
      this.address,
      this.email,
      this.phone,
      this.description);

    this.httpService.sendContact(contact).subscribe(
      (response:ContactDto) =>{
        console.log(response);
      },
      error => {
        console.log(error.error);
      }
    );



    this.name = '';
    this.lastName = '';
    this.email = '';
    this.address = '';
    this.phone = '';
    this.description = '';
  }

}

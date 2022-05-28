import {Component, OnInit} from '@angular/core';

import {DataService} from '../data.service';
import {Router} from "@angular/router";
import axios from "axios";


@Component({
  selector: 'app-SignUp',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  x = 1;
  lastName: any;
  name: any;
  middleName: any;
  dateOfBith: any;
  phone: any;
  driverNum: any;
  passport: any;
  email: any;
  password: any;
  passwordRepeat: any;


  constructor(private dataService: DataService, private route: Router) {
  }


  SignIn(lastname: string, name: string, middleName: string, dateOfBith: string, phone: string, driverNum: string,
         passport: string, email: string, password: string) {
    lastname = this.lastName;
    name = this.name;
    middleName = this.middleName;
    dateOfBith = this.dateOfBith;
    phone = this.phone;
    driverNum = this.driverNum;
    passport = this.passport;
    email = this.email;
    password = this.password;
    this.x = 1;
    if (driverNum != "" && passport != "" && email != "" && password != "" && password == this.passwordRepeat) {
      axios.post("http://localhost:1234/authorization", {
        Name:name,
        LastName: lastname,
        MiddleName: middleName,
        NumberDriver: parseInt(driverNum),
        Number: phone,
        Passport: passport,
        DataOfBith: new Date(dateOfBith),
        Email: email,
        Password: password
      })
        .then((response) => {
          if (response.status === 200) {
            alert('Успешно!');
          } else if (response.status === 404) {
            alert('LALALA');
          }
        })
      this.route.navigate(['/SignIn'])
    } else {
      alert("Пароль не совпадает или не все поля заполнены");
    }

  }

  rout() {
    this.route.navigate(['/SignIn'])
  }


  ngOnInit(): void {
    this.name = "";
    this.lastName = "";
    this.middleName = "";
    this.phone = "";
    this.password = "";
    this.email = "";
  }
  Further() {
    if(this.lastName != "" && this.name != "" && this.middleName != "" && this.phone != ""&&this.dateOfBith!=null){
      this.x = 2;
    }
    else {
      alert("Поля не все заполнены")
    }

  }
}

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
  error=0;


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


    console.log(this.dateOfBith)
    if(password != this.passwordRepeat)
    {
      alert("Пароли не совпадают")
    }
    else
    {
    if (driverNum != "" && passport != "" && email != "" && password != "" ) {
      axios.post("http://localhost:1234/ClientAdd", {
        Name: name,
        LastName: lastname,
        MiddleName: middleName,
        NumberDriver: driverNum,
        Passport: passport,
        Number: phone,
        DataOfBith: dateOfBith,
        Email: email,
        Password : password
      })
        .then((response) => {
          if (response.status === 200) {
            this.route.navigate(['/SignIn'])
          } else if (response.status === 404) {
            alert('Error');
            this.x = 1;
          }
        })
    }
    else {
      this.error=1;
    }
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
      this.error=0;
    }
    else {
      this.error=1;
    }

  }
}

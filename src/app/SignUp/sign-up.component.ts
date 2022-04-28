import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-SignUp',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  Fio: string = this.dataService.getFio();
  dateOfBith: string = this.dataService.getDateOfBith();
  phone: number = 7;
  driverNum: string ="";
  email: string = this.dataService.getEmail();
  password: string = this.dataService.getPassword();
  passwordRepeat: string = "";


  constructor(private dataService: DataService, private  route:Router) {
  }

  SignIn(Fio: string,
         dateOfBith: string,
         phone: number,
         driverNum: string,
         email: string,
         password: string,
         passwordRepeat: string) {
    if (this.Fio != "" && this.email != "" &&
      this.password != "" && this.driverNum != "" &&
      this.phone != 7 && this.dateOfBith != "" &&
      this.password == this.passwordRepeat) {
            this.dataService.addFio(Fio)
            this.dataService.addDateOfBith(dateOfBith)
            this.dataService.addPhone(phone)
            this.dataService.addEmail(email)
            this.dataService.addDriverNum(driverNum)
            this.dataService.addPassword(password)
      this.route.navigate(['/SignIn'])}
    else {alert(" Eсть незаполненные поля, либо пароли не совпадает")}
  }
  rout(){
    this.route.navigate(['/SignIn'])
  }


  ngOnInit(): void {
  }

}

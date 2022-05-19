import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import axios from "axios";

@Component({
  selector: 'app-SignIn',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  login = "";
  passwordUser = ""

  constructor(private route: Router) {
  }

  rout(login: string, passwordUser: string) {
    login = this.login;
    passwordUser = this.passwordUser;
    //добавить запрос к серверу на проверку и добавление логина и пароля

    this.route.navigate(['/cars'])

    axios.post("http://localhost:1234/humanity",
      {
        Login: login, Password: passwordUser
      })
      .then((response) => {
        if (response.status === 200) {
          alert('Успешно!');
          console.log (login.toString())
        } else if (response.status === 404) {
          alert('LALALA');
        }
      })
  }

  signUp() {
    this.route.navigate(['/SignUp'])
  }

  ngOnInit(): void {
  }
}

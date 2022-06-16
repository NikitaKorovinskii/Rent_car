import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import {DataService} from "../data.service";


@Component({
  selector: 'app-personal-account',
  templateUrl: './personal-account.component.html',
  styleUrls: ['./personal-account.component.css']
})
export class PersonalAccountComponent implements OnInit {
  clientEmail="";
  clientDriverNum = "";
  clientFio= "";
  Auth: { LastName: "", Name: "", MiddleName: "", DriverNum: "", Email: "" }[] = [
    { LastName: "", Name: "", MiddleName: "", DriverNum: "", Email: "" }
  ];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // поменять на запрос ниже
    axios.get("http://localhost:1234/client",
      {
        headers:{
          "Token":this.dataService.getToken().split('.')[1],
          "IdClient":this.dataService.getToken().split('.')[0]
        }
      })
      .then((res) => {
          this.Auth=JSON.parse(res.headers["client"])
      })
      .catch((err: any) => {
        console.log(err)
      });

  }

}

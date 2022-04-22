import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  sum: number = 0;
  constructor(private dataService: DataService, private  router: Router){}

  // @ts-ignore
  addItem(sum: number){
    this.dataService.addData(sum);//заменить на запрос к серверу который поменяет данные в бд
  }
  ngOnInit(){

  }


}

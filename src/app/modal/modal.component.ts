import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  constructor(private dataService: DataService){}

  sum: number = 0;
  addItem(name: number){
    this.dataService.addData(name);//заменить на запрос к серверу который поменяет данные в бд
  }
  ngOnInit(){

  }


}

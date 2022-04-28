import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from "../data.service";

function getRandomInt(number: number) {
  return Math.floor(Math.random() * number);
}

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  g = getRandomInt(80);
  h = getRandomInt(100);

  constructor(private dataService: DataService) {
  }

  sum: number = 0;

  ngOnInit() {

  }


}

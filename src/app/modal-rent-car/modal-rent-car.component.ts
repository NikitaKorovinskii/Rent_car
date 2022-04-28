import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-rent-car',
  templateUrl: './modal-rent-car.component.html',
  styleUrls: ['./modal-rent-car.component.css']
})
export class ModalRentCarComponent implements OnInit {
  @Output() closes = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

}

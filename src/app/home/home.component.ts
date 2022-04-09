import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(){

    const myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: ['0', '0.1', '0.66', '1', '2.34', '2.36'],
        datasets: [{
          label: 'График функции f(x)',
          data: [-3.5, -2.5, -2, 2, 13.2, 0],
          borderWidth: 2,
          borderColor:"red"
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

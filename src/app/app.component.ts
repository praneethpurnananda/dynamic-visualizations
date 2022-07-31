import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Chart, registerables } from 'chart.js'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hello-world';

  canvas: any;
  ctx: any;
  myChart: any;

  secondCanvas: any;
  secondCtx: any;
  dataChart: any;

  constructor(private route: Router) {

  }

  ngOnInit(): void {
    Chart.register(...registerables);
    this.canvas = <HTMLCanvasElement>document.getElementById('myChart');
    this.secondCanvas = <HTMLCanvasElement>document.getElementById('dataChart');

    this.ctx = this.canvas.getContext('2d');
    this.secondCtx = this.secondCanvas.getContext('2d');

    this.myChart = new Chart(this.canvas, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Green'],
        datasets: [{
          label: '# of votes',
          data: [1, 11, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
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


    this.dataChart = new Chart(this.secondCanvas, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Green'],
        datasets: [{
          label: '# of votes',
          data: [1, 11, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
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

  practiceFunction(path: string) {
    this.route.navigate(['/' + path]);
  }

  newGraph(x: any) {
    this.myChart.config.type = x;
    this.myChart.update();
  }

  newData(x: any) {
    this.dataChart.config.data = {
      labels: ['Observability CPE', 'IDM', 'DLT'],
      datasets: [{
        label: '$Cost data',
        data: [185, 211, 315],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    };
    this.dataChart.update();
  }


}

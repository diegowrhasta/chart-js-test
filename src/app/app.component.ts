import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from "chart.js";
Chart.register(...registerables);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'my-first-project';

  public ngOnInit(): void {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data:
        {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets:
            [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
              }
            ]
        },
      options:
        {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
    });

    var myChart2 = new Chart("myChart2", {
      type: 'bar',
      data:
        {
          labels: ["January", "Februrary", "March", "April", "June", "July", "August"],
          datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)'
            ],
            borderWidth: 1
          }]
        },
      options:
        {
          indexAxis: 'y',
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
    });

    var myChar3 = new Chart("myChar3", {
      type: 'bar',
      data:
        {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets:
            [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
              }
            ]
        },
      options:
        {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
    });

    var myChart4 = new Chart("myChar4", {
      type: 'bar',
      data:
        {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets:
            [
              {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1
              }
            ]
        },
      options:
        {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
    });
  }
}

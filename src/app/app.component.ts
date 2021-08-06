import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Highcharts from 'highcharts';
import {MainService} from './service/main.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  public showGif = true;
  public Highcharts = Highcharts;
  public barGraphOptions: any;
  public message: any;
  constructor(
    private modalService: NgbModal,
    private mainService:MainService
    ) {}

    ngOnInit() {
    }
    // OPEN FIRST MODAL
    openScrollableContent(openModal:any) {
      this.modalService.open(openModal,{ scrollable: true });
    }

    // OPEN GIF MODAL
    openGif(gif:any) {
      this.modalService.open(gif,{ scrollable: true });
       setTimeout (() => {
        this.modalService.dismissAll();
      },7000);
    }

    // OPEN GRAPH MODAL
    openGraph(graph:any) {
      this.modalService.open(graph,{ scrollable: true });
      // this.mainService.sendClickEvent(graph);
      this.barGraphOptions = {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Twubric Data'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: 'userId',
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rubric Score',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },     
        },
        plotOptions: {
            bar: {
              gapWidht:15,
                dataLabels: {
                    enabled: true
                }
            },
            series: {
              pointWidth: 4,
          }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 10,
            floating: true,
            borderWidth: 2,
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total',
            type:'bar',
            data: [1,2,3,4]
        }, {
            name: 'Chirpiness',
            type:'bar',
            data: [1,2,3,4]
        }, {
            name: 'Friends',
            type:'bar',
            data: [1,2,3,4]
        }, {
            name: 'Influence',
            type:'bar',
            data: [1,2,3,4]
        }]
      }
    }
}

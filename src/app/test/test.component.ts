import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as Highcharts from 'highcharts';
import { MainService } from '../service/main.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  clickEventSubscription: Subscription;
  public Highcharts = Highcharts;
  public barGraphOptions: any;
  public graph: any;
  constructor(
    private modalService: NgbModal,
    private mainService:MainService) 
    { this.clickEventSubscription= this.mainService.getClickEvent().subscribe(() => {
      this.openGraph(this.graph);
    })}

  ngOnInit() {}

  openGraph(graph:any) {
    this.modalService.open(graph,{ scrollable: true });
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

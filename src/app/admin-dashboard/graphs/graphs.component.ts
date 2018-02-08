import { Component, OnInit } from '@angular/core';
import { ProviderUserService } from "../providerUser.service";

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

  constructor(private provider:ProviderUserService) { }

  ngOnInit() {
    // console.log(this.provider.activeUsers);
  }
public pieChartLabels:string[] = ['Active Users', 'De-active Users' ];

  public pieChartData:number[] = [700, 200];
  public pieChartType:string = 'pie';
  public chartColors:any[]=[{
          backgroundColor:["tomato", "#6FC8CE"] 
  }]
  public pieChartLabels1:string[] = ['Active Providers', 'De-active providers' ];

  public pieChartData1:number[] = [70, 2];
  public pieChartType1:string = 'pie';
  public chartColors1:any[]=[{
          backgroundColor:["tomato", "#6FC8CE"] 
  }]
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Udemy', 'Cousera', 'edx','educentral'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [29, 59, 80, 70],label:'courses'},
   
  ];
 
  // events
  public bardiagramClicked(e:any):void {
    console.log(e);
  }
 
  public bardiagramHovered(e:any):void {
    console.log(e);
  }
}

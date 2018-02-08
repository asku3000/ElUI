import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.css']
})
export class ValueComponent implements OnInit {
user;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.user = JSON.parse(params['id']);
      this.check();
    });
  }

  myfunc(value){
    this.user = value;
    alert(this.user);
  }
check()
{
  alert(this.user);
}

}

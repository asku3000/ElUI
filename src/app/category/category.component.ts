import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {

private category: string;
  private sub;
 member: any = ``;
  found: boolean ;
  isloading: boolean = true;
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.isloading=true;
      this.category = params['name'];
      this.categorym(this.category);
    console.log(this.category);
    });
    
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }


   categorym(category) {
    this.httpClient.get(`https://educentralservicedev.azurewebsites.net/EduCentral/category?name=${this.category}`)
      .subscribe(
      (data: any[]) => {
        this.isloading=false;
        if (data.length != 0) {
          this.member = data;
          console.log(this.member);
          this.found = true;
        } else {
          this.member = data;
          this.found = false;
        }

      }
      )


  }



}


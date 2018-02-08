import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

search:string="";
  constructor() { }

putsearch(data:string){

  this.search=data;
}

getsearch(): string {
  return this.search;
}


}

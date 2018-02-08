import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

 private search=new BehaviorSubject<string>('');
 cast=this.search.asObservable();

  constructor() { }

putsearch(newSearch){
  this.search.next(newSearch);
}



}

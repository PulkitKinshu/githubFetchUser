import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  searchTextChanged = new Subject();
  constructor(private _fetchData: FetchDataService) {

    this.getUser('a');
  }

  lang ="";

  userData: any = [];
  count: number;
  personNames: any;


  ngOnInit() {
    this.searchTextChanged.pipe(debounceTime(200))
      .subscribe((x) => {
        this.getUser(x);
      });

  }

  getUser(text) {
    this._fetchData.fetchUser(text).subscribe((x: any) => {
      this.userData = x.items;
      this.count = x.total_count;
      this.personNames = x.items.login
    })
  }
  searchGet(event) {
    this.searchTextChanged.next(event.target.value);
  }

  sayHello() {
    console.log("hello ! Sam")
  }




}

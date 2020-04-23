import { Component, OnInit, Input } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userInfo: any;
  @Input() userCount: number;
  @Input() lang: string;

  temp;

  constructor(private _fetchData: FetchDataService) { }

  ngOnInit() {
  }

  userDetail: any ;


  sortAlpha() {
    this.userInfo = this.userInfo.sort((val1, val2) => {
      return ((val2.login > val1.login) ? -1 : (((val2.login < val1.login) ? 1 : 0)))
    })
  }

  sortRevAlpha() {
    this.temp = this.userInfo.sort((val1, val2) => {
      return ((val2.login < val1.login) ? -1 : (((val2.login > val1.login) ? 1 : 0)))
    })

    console.log(this.temp)
  }

  showDetail(name) {
    this._fetchData.fetchDetail(name).subscribe((x: any) => {
      this.userDetail = x;
     
    })
  }


  myFuncEnglish(lang) {
    if (lang == 'AZ') {
      console.log('function called is AZ');
      return this.sortAlpha()
    }

    if (lang == 'ZA') {
      console.log('function called is ZA');
      return this.sortRevAlpha()
    }

  }
}

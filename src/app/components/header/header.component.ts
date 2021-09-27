import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private now: Date = new Date();
  private dateOptions: Object = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
  public currentDate: string;

  constructor() {
    this.currentDate = this.now.toLocaleString('en-US', this.dateOptions)
  }

  ngOnInit(): void {
  }

}

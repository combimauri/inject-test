import { Component, OnInit } from '@angular/core';

import { getRouteParam } from '../core/get-route-param.function';

@Component({
  selector: 'app-route-inject',
  templateUrl: './route-inject.component.html',
  styleUrls: ['./route-inject.component.scss'],
})
export class RouteInjectComponent implements OnInit {
  private id = getRouteParam('id');

  ngOnInit(): void {
    console.log(this.id);
  }
}

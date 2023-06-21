import { Component, inject, OnInit } from '@angular/core';

import { HTTP } from './http.token';
import { untilDestroyed } from '../core/until-destroyed.function';

@Component({
  selector: 'app-http-inject',
  templateUrl: './http-inject.component.html',
  styleUrls: ['./http-inject.component.scss'],
})
export class HttpInjectComponent implements OnInit {
  private httpClient = inject(HTTP);
  private unsubscribe$ = untilDestroyed();

  ngOnInit(): void {
    this.httpClient
      .get('https://pokeapi.co/api/v2/pokemon/1')
      .pipe(this.unsubscribe$)
      .subscribe(console.log);
  }
}

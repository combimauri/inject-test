import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss'],
})
export class RouteComponent implements OnInit {
  private id = this.route.snapshot.params['id'];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.id);
  }
}

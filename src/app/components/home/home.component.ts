import { Component, OnInit } from '@angular/core';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faGear = faCog;
  faCloud = faCloud;
  faCartPlus = faCartPlus;

  constructor() {}

  ngOnInit() {}
}

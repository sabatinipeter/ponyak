import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  inputs: ['inputtest'],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() name: string;
  @Input() roles: string;

  constructor() {}

  ngOnInit() {
  }

}

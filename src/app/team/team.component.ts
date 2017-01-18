import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: any = [
      {
          "name":"Route One Desking",
          "roles":["DL", "Dev", "Dev"]
      },
      {
          "name":"Route One Menu",
          "roles":["DL", "DL", "Dev", "Dev", "Dev", "Dev", "Apr"]
      },
      {
          "name":"ACSI",
          "roles":["DL", "TL", "Dev", "Dev", "Dev", "Dev", "Dev","Dev", "XD", "XD"]
      },
      {
          "name":"JIS",
          "roles":["DM", "DL", "DL", "TL", "Dev", "Dev", "Dev", "Dev", "Dev", "Dev", "Dev", "XD"]
      },
      {
          "name":"Ford - FMCC",
          "roles":["DM", "DL", "Dev", "Dev", "Dev", "1/2 Dev"]
      },
      {
          "name":"Ford - GForce",
          "roles":["DM", "DL", "TL", "BA", "Dev", "Dev", "Dev", "1/2 Dev", "1/2 Dev"]
      },
      {
          "name":"Ford - Agile COE",
          "roles":["Other", "Other", "Other"]

      },
      {
          "name":"Ford - Falcon",
          "roles":["DL", "Dev", "Dev", "Dev"]
      },
      {
          "name":"Ford - PDO",
          "roles":["Other", "Other"]
      }
      ];

  constructor() { }

  ngOnInit() {
  }

}

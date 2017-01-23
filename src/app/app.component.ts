import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

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

  cards: any = [{
        "name": "Matt Staffeld",
        "image": "assets/matthewstaffeld.png",
        "position": "Software Journeyman",
        "notes":  "Javascript"
    },{
        "name": "Bree Lane",
        "image": "assets/breelane.jpg",
        "position": "Delivery Lead",
        "notes": "Git"
    },{
        "name": "Adam Gartee",
        "image": "assets/adamgartee.png",
        "position": "Software Journeyman",
        "notes": ".net"
    },{
        "name": "Aladin Gohar",
        "image": "assets/aladingohar.jpg",
        "position": "Delivery Manager"
    },{
        "name": "Amitai Schleier",
        "image": "assets/amitaischleier.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Angela Peat",
        "image": "assets/angelapeat.png",
        "position": "Delivery Lead"
    },{
        "name": "Aziz Harawala",
        "image": "assets/azizhararwala.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Ben Tidman",
        "image": "assets/bentidman.jpg",
        "position": "Software Journeyman",
        "notes":  "Javascript"
    },{
        "name": "Bill Koester",
        "image": "assets/billkoester.jpg",
        "position": "Software Journeyman"
    },{
        "name": "Brett Lilley",
        "image": "assets/brettlilley.jpg",
        "position": "Software Journeyman",
        "notes": ".net"
    },{
        "name": "Chris Atkins",
        "image": "assets/chrisatkins.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Christopher Bibbs",
        "image": "assets/christopherbibbs.png",
        "position": "Delivery Lead"
    },{
        "name": "Clay Dowling",
        "image": "assets/claydowling.jpg",
        "position": "Software Journeyman"
    },{
        "name": "Dan Davis",
        "image": "assets/dandavis.png",
        "position": "Delivery Lead"
    },{
        "name": "Dan Putman",
        "image": "assets/danputman.png",
        "position": "Software Craftsman",
        "notes": "beard"
    },{
        "name": "David Zuidema",
        "image": "assets/davidzuidema.jpeg",
        "position": "Software Journeyman"
    },{
        "name": "Edwin Aoraha",
        "image": "assets/edwinaoraha.png",
        "position": "Software Apprentice"
    },{
        "name": "Erik Przekop",
        "image": "assets/erikprzekop.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Fred Estabrook",
        "image": "assets/fredestabrook.png",
        "position": "Delivery Lead"
    },{
        "name": "Gabe Ilko",
        "image": "assets/gabeIlko.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Jeeva Adarahah",
        "image": "assets/jeevanadarahah.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Jeff Hoover",
        "image": "assets/jeffhoover.png",
        "position": "Software Journeyman"
    },{
        "name": "Jennifer Folkerth",
        "image": "assets/jenniferfolkerth.jpg",
        "position": "Software Journeyman"
    },{
        "name": "Joe Dluzen",
        "image": "assets/joedluzen.jpg",
        "position": "Software Journeyman"
    },{
        "name": "John Gartee",
        "image": "assets/johngartee.png",
        "position": "Software Craftsman",
        "notes": "beard"
    },{
        "name": "Jonathan Baugh",
        "image": "assets/jonathanbaugh.jpg",
        "position": "Delivery Lead/Experience Architect",
        "notes": "beard"
    },{
        "name": "Josh Bechard",
        "image": "assets/joshbechard.jpg",
        "position": "Software Journeyman"
    },{
        "name": "Josh Ribolla",
        "image": "assets/joshribolla.jpg",
        "position": "Experience Architect"
    },{
        "name": "Mark Henke",
        "image": "assets/markhenke.jpg",
        "position": "Software Journeyman",
        "notes": "beard"
    },{
        "name": "Mark Protas",
        "image": "assets/markprotas.jpg",
        "position": "Software Craftsman",
        "notes": "Java beard"
    },{
        "name": "Meera Srinivasan",
        "image": "assets/meerasrinivasan.png",
        "position": "Delivery Lead"
    },{
        "name": "Michele Cresmen-Block",
        "image": "assets/michelecresmenblock.png",
        "position": "Delivery Manager"
    },{
        "name": "Paul Glinski",
        "image": "assets/paulglinski.jpg",
        "position": "Software Journeyman"
    },{
        "name": "Peter Sabatini",
        "image": "assets/petersabatini.png",
        "position": "Software Journeyman",
        "notes": "Javascript"
    },{
        "name": "Ralph Hale",
        "image": "assets/ralphhale.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Rob Murdock",
        "image": "assets/robmurdock.png",
        "position": "Software Craftsman",
        "notes": "beard"
    },{
        "name": "Stephen Cavaliere",
        "image": "assets/stephencavaliere.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Theo Chupp",
        "image": "assets/theochupp.jpg",
        "position": "Software Journeyman",
        "notes": "beard"
    },{
        "name": "Todd Hurley",
        "image": "assets/toddhurley.jpg",
        "position": "Software Craftsman"
    },{
        "name": "Tom Puricelli",
        "image": "assets/tompuricelli.jpg",
        "position": "Delivery Lead"
    },{
        "name": "Will Gibbins",
        "image": "assets/willgibbins.jpg",
        "position": "Delivery Lead",
        "notes": "beard"
    }
  ];

  clicked(event) {
    alert('Test');
  }

}

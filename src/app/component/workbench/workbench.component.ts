import {Component, OnInit, Input} from '@angular/core';
import {Observable, BehaviorSubject, zip} from 'rxjs';
import {Routes, Router} from '@angular/router';

interface Tile {
  Title: string; 
  Colour: string
}

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.css']
})
export class WorkbenchComponent implements OnInit {
  tiles: Array<Tile>;

  constructor(private router: Router) {
  }
  
  ngOnInit() {
    this.tiles = new Array<{Title: string; Colour: string}>();
    this.tiles.push({Title: 'Client Work', Colour: this.randomColour()});
    this.tiles.push({Title: 'Field Work', Colour: this.randomColour()});
    this.tiles.push({Title: '', Colour: this.randomColour()});
    this.tiles.push({Title: '', Colour: this.randomColour()});
  }

  onTileClick(tile: Tile) {
    if(tile.Title == "Client Work") {
      this.router.navigate(['/cw']);
    }
    if(tile.Title == "Filed Work") {
      this.router.navigate(['/fw']);
    }
  }

  randomColour() {
    let rc = "#";
    for (let i = 0; i < 6; i++) {
      rc += Math.floor(Math.random() * 16).toString(16);
    }
    return rc;
  }
}

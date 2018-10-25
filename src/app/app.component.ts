import { Component, OnInit } from '@angular/core';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Observable } from 'rxjs';
import { Routes, Router } from '@angular/router';
import { ToolbarService } from './service/toolbar.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Title: Observable<string>;

  constructor(private router: Router,
    public toolbar: ToolbarService) {
    this.Title = toolbar.getTitle();
  }

  onHome() {
    this.router.navigate(['']);
  }

  onStyleGuide() {
    this.router.navigate(['styleguide']);
  }

  onWorkOrderClick() {
    this.router.navigate(['/workorder']);
  } 

  onClientMonitorClick() {
    this.router.navigate(['/cw']);
  } 

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
/// <reference types="googlemaps" />

declare var google: any;

@Component({
  selector: 'app-sdk-map',
  templateUrl: './sdk-map.component.html',
  styleUrls: ['./sdk-map.component.css']
})
export class SdkMapComponent implements OnInit {
  
  @ViewChild('gmap') gmapElement: any;
  map: GoogleMap;

  constructor() { }

  ngOnInit() {
    console.log('***********sdk-map******************');
    var mapProp = {
      center: new google.maps.LatLng(-35.7465423,174.3080182),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    
    var mlatlng = new google.maps.LatLng(-35.7465423,174.3080182);
    var marker = new google.maps.Marker({
      position: mlatlng,
      map: this.map,
      title: 'Northpower'
    });  }

}

import { Component, ElementRef, ViewChild } from '@angular/core';
import { loadModules } from 'esri-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Get a container link for map place
  //@ViewChild('mapView', { static: true }) private mapViewElement: ElementRef;
  @ViewChild('mapView', { static: true }) mapViewElement!: ElementRef;

  // main map view
  private mapView: any;
  title = 'ArcGIS angular map';

  constructor() {
    // This function load Dojo's  require the classes
    // listed in the array modules
    loadModules(['esri/Map', 'esri/views/MapView'])
      .then(([Map, MapView]: [__esri.]) => {
        // set default map properties
        const mapProperties = {
          basemap: 'gray'
        }
        // create map by default properties
        const map = new Map(mapProperties);
        // set default map view properties
        // container - element in html-template for locate map
        // zoom - default zoom parameter, value from 1 to 18
        const mapViewProperties = {
          container: this.mapViewElement.nativeElement,
          zoom: 3,
          map
        }
        // create map view by default properties
        this.mapView = new MapView(mapViewProperties);
      });
  }
}


//import { Component, ElementRef, ViewChild } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { RouterOutlet } from '@angular/router';
//import { loadModules } from 'esri-loader';

//@Component({
//  selector: 'app-root',
//  standalone: true,
//  imports: [CommonModule, RouterOutlet],
//  templateUrl: './app.component.html',
//  styleUrl: './app.component.scss'
//})
//export class AppComponent {

//  // Get a container link for map place
//  @ViewChild('mapView', { static: true }) private readonly
//  mapViewElement: ElementRef;


//  // Main map view
//  private mapView;
//  title = 'arcgis-angular-map';
  
//  constructor() {

//    // This function load Dojo's require the classes
//    // listed in the array modules
//    loadModules(['esri/Map', 'esri/views/MapView'])
//      .then(([Map, MapView]: [__esri.MapConstructor, --esri.MapViewConstructor]) =>
//    {
//      // Set default map properties
//      const mapProperties = {
//        basemap: 'gray'
//      }

//      // Create map by default properties
//      const map = new Map(mapProperties);

//      // Set default map view properties
//      // Container - element in HTML-template for locate map
//      // Zoom - default zoom parameter, value 1 to 18
//      const mapViewProperties = {
//        container: this.mapViewElement.nativeElement,
//        zoom: 3,
//        map
//      }

//      // Create map view by default properties
//      this.mapView = new MapView(mapViewProperties);

//    });

//  }

//}

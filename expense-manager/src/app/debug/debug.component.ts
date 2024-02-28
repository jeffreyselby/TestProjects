import { Component } from '@angular/core';
import { DebugService } from '../debug.service';

@Component({
  selector: 'app-debug',
  standalone: true,
  imports: [],
  templateUrl: './debug.component.html',
  styleUrl: './debug.component.scss'
})
export class DebugComponent {

  
  constructor(private debugService: DebugService) {

  }

  ngOnInit() {
    this.debugService.info("Debug component gets service from Parent");
  }
}

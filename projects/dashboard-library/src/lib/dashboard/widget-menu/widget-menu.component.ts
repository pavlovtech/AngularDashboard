import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WidgetType } from '../models/widget-type.model';

@Component({
  selector: 'lib-widget-menu',
  templateUrl: './widget-menu.component.html',
  styleUrls: ['./widget-menu.component.scss']
})
export class WidgetMenuComponent implements OnInit {
  
  @Input()
  widgetTypes: WidgetType[];

  @Output()
  closeButtonClicked = new EventEmitter();

  onCloseIconClicked() {
    this.closeButtonClicked.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}

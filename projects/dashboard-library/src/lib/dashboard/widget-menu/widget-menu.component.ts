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

  @Output()
  widgetTypeClicked = new EventEmitter<WidgetType>();

  @Output()
  dragStart = new EventEmitter<WidgetType>();

  onCloseIconClicked() {
    this.closeButtonClicked.emit();
  }

  constructor() { }

  ngOnInit() {
  }

  onDragstart(widgetType: WidgetType) {
    this.dragStart.emit(widgetType);
  }

  onWidgetTypeClicked(widgetType: WidgetType) {
    this.widgetTypeClicked.emit(widgetType);
  }
}

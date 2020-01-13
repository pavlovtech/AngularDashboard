import { GridsterItem } from 'angular-gridster2';
import { v1 as uuid } from 'uuid';
import { WidgetSettings } from './widget-settings.model';

export class DashboardCard {

  cardId?: string;
  component: any;
  componentName?: string;

  widgetSettings: WidgetSettings;

  placement: GridsterItem;

  constructor(card: DashboardCard) {
      if (!this.cardId) {
        this.cardId = uuid();
      }

      Object.assign(this, card);
  }
}

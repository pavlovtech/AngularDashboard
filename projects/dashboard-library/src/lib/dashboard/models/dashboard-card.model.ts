import { GridsterItem } from 'angular-gridster2';
import { v1 as uuid } from 'uuid';

export class DashboardCard {

  widgetTitle: string;

  cardId?: string;
  component: any;
  componentName?: string;

  placement: GridsterItem;

  constructor(card: DashboardCard) {
      if (!this.cardId) {
        this.cardId = uuid();
      }

      Object.assign(this, card);
  }
}

import { GridsterItem } from 'angular-gridster2';
import { v1 as uuid } from 'uuid';

export class DashboardCard implements GridsterItem {

  widgetTitle: string;

  cardId?: string;
  component: any;
  componentName?: string;
  x: number;
  y: number;
  rows: number;
  cols: number;
  dragEnabled?: boolean;
  resizeEnabled?: boolean;
  compactEnabled?: boolean;
  maxItemRows?: number;
  minItemRows?: number;
  maxItemCols?: number;
  minItemCols?: number;
  minItemArea?: number;
  maxItemArea?: number;

  constructor(card: DashboardCard) {
      if (!this.cardId) {
        this.cardId = uuid();
      }

      Object.assign(this, card);
  }
}

import { GridsterItem } from 'angular-gridster2';
import * as uuid from 'uuid/v1';

export class DashboardCard {
    cardId?: string;
    component?: any;
    componentName?: string;
    x?: number;
    y?: number;
    rows?: number;
    cols?: number;
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
        Object.assign(this, card);

        this.componentName = this.component.name;

        if (!this.cardId) {
            this.cardId = uuid();
        }
    }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { DashboardCard } from '../models/dashboard-card';

@Injectable({
  providedIn: 'root'
})
export class CardResizeService {

  private dashboardCardResize = new Subject<DashboardCard>();

  dashboardCardResize$ = this.dashboardCardResize.asObservable();

  resize(card: DashboardCard) {
    this.dashboardCardResize.next(card);
  }

  constructor() { }
}

# Dashboard

# History

## Setting up

1. ng new Dashboard
2. npm i angular-gridster2
3. npm i bootstrap 
4. include bootstrap to the angular.json

    "styles": [
      "node_modules/bootstrap/scss/bootstrap.scss",
      /* ... */
    ]

5. ng add @angular/material
6. npm i angular-highcharts highcharts

## Adding Gridster
1. Create a dashboard component

    `ng g component dashboard`

2. Add the gridster component

    <gridster [options]="options">
        <gridster-item [item]="item" *ngFor="let item of items">
           <p>Test widget</p>
        </gridster-item>
    </gridster>

# Toolbar

Add a toolbar

    `<mat-toolbar>
        <button mat-mini-fab (click)="addItem()" class="add-button cols-2">
            <mat-icon>add</mat-icon>
        </button>
    </mat-toolbar>`

# Add simple chart widget

1. Include HightChards module

    import { ChartModule } from 'angular-highcharts';

2. Generate ChartWidget component
    
    ng g component ChartWidget

# Dashboard Card

Add a dashboard card class

    npm install uuid

Use uuid to generate unique ID's

# Add dynamic component directive

    ng g directive DynamicComponent

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

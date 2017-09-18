import angular from 'angular';
import ngRoute from 'angular-route';

import routing from './app.route';
import dataService from './app.service';

angular.module('customerRecords', ['ngRoute'])
    .config(routing)
    .service('dataService', dataService);
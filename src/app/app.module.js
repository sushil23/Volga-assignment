import angular from 'angular';
import ngRoute from 'angular-route';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import routing from './app.route';
import dataService from './app.service';
import './records/records.css';

angular.module('customerRecords', ['ngRoute'])
    .config(routing)
    .service('dataService', dataService);
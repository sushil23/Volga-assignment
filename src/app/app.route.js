import dataService from './app.service';
import RecordsListController from './records/recordsList.controller';
import RecordDetailsController from './records/recordDetails.controller';

routes.$inject = ['$routeProvider', '$locationProvider'];

export default function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/records', {
            template: require('./records/recordsList.html'),
            controller: RecordsListController,
            controllerAs: 'recordsList',
            resolve: {
                records: (dataService) => {
                    return dataService.getRecords();
                }
            }
        })
        .when('/records/:id', {
            template: require('./records/recordDetails.html'),
            controller: RecordDetailsController,
            controllerAs: 'recordDetails',
            resolve: {
                recordData: (dataService, $route) => {
                    return dataService.getRecordDetails($route.current.params.id);
                }
            }
        })
        .otherwise('/records');
}
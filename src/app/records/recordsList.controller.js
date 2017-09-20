export default class RecordsListController {
    constructor(records, dataService) {
        this.records = records;
        this.dataService = dataService;
        this.newRecord = {
            name: "",
            email: "",
            phone: "",
            address: ""
        };
    }

    deleteRecord(id) {
        this.records.forEach((record, index, records) => {
            if (id === record.id) {
                records.splice(index, 1);
            }
        });
    }

    createRecord() {
        var data = {
            name: this.newRecord.name,
            email: this.newRecord.email,
            phone: this.newRecord.phone,
            address: this.newRecord.address,
        }
        this.dataService.createRecord(data);
        this.newRecord = {
            name: "",
            email: "",
            phone: "",
            address: ""
        };

        $('.create-record').modal('hide');
    }

    openCreateRecModal() {
        $('.create-record').modal('show');
    }
}

RecordsListController.$inject = ['records', 'dataService'];
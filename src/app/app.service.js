export default class Service {
    constructor() {
        this.records = [
            {   
                id: 0,
                name: 'John',
                email: 'john@gmail.com',
                phone: '9876543211',
                address: 'Mumbai'
            },
            {
                id: 1,
                name: 'Max',
                email: 'max@gmail.com',
                phone: '9988776655',
                address: 'Bengaluru'
            }
        ]
    }

    getRecords() {
        return this.records;
    }

    getRecordDetails(id) {
        return this.records.find((customer) => {
            return customer.id === id;
        });
    }

    createRecord(data) {
        this.records.push(data);
    }
}
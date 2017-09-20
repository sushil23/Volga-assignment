import uniqid from 'uniqid';

export default class Service {
    constructor() {
        this.records = [
            {   
                id: uniqid(),
                name: 'James',
                email: 'james@gmail.com',
                phone: '9876543211',
                address: 'Mumbai'
            },
            {
                id: uniqid(),
                name: 'Clara',
                email: 'clara@gmail.com',
                phone: '9988776655',
                address: 'Bengaluru'
            },
            {
                id: uniqid(),
                name: 'Wayne',
                email: 'wayne@gmail.com',
                phone: '8123456789',
                address: 'Bengaluru'
            },
            {
                id: uniqid(),
                name: 'Maya',
                email: 'maya@gmail.com',
                phone: '7412589632',
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
        data.id = uniqid();
        this.records.push(data);
    }
}
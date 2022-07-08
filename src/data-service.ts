import { DI } from 'aurelia';

import Dexie from 'dexie';

export const IDataService = DI.createInterface<IDataService>('IDataService', x => x.singleton(DataService));
export interface IDataService extends DataService {}

interface IInvoice {
    id: number;
    client: string;
    currency: string;
    created: Date;
    date: Date;
}

enum InvoiceStatus {
    Pending = 'pending',
    Paid = 'paid',
    Cancelled = 'cancelled',
    Refunded = 'refunded'
}

export class DataService {
    protected db;

    constructor() {
        this.db = new Dexie('freeinvoice');

        this.db.version(1).stores({
            invoices: `++id, date, status`
        });
    }

    async addInvoice(invoice: IInvoice) {
        return await this.db.invoices.add(invoice);
    }

    async updateInvoice(id: number, invoice: IInvoice) {
        return await this.db.invoices.update(id, invoice);
    }

    async updateInvoiceStatus(id: number, status: InvoiceStatus) {
        return await this.db.invoices.update(id, { status });
    }

    async deleteInvoice(id) {
        return await this.db.invoices.delete(id);
    }

    async getInvoices() {
        return await this.db.invoices.toArray();
    }

    async getInvoiceById(id) {
        return await this.db.invoices.get(id);
    }

    async getInvoiceDateRange(startDate, endDate) {
        return await this.db.invoices.where('date').between(startDate, endDate).toArray();
    }

    async getInvoicesByStatus(status) {
        return await this.db.invoices.where('status').equals(status).toArray();
    }
}
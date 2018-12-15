import { NgZone } from '@angular/core';

declare class DataModel {
    _id: string;
    Date: Date;
}

export class DataComponent {
    constructor(public _ngZone: NgZone) { }
    DataController: any;
    displayModalNew: string;
    items: DataModel[];
    item: any;
    closeSlider() {
        this._ngZone.run(async () => {
            this.displayModalNew = 'closing';
        });
    }
    async updateItem() {
        this.item.Date = new Date();
        await this.DataController.update(this.item._id, this.item);
        this.displayModalNew = '';
    }

    async loadItems() {
        this.items = await this.DataController.query({});
    }

    async deleteItem(item) {
        if (confirm('delete')) {
            await this.DataController.delete(item._id);
            this.loadItems();
        }
    }

    async createItem() {
        await this.DataController.create(this.item);
        await this.loadItems();
        this.displayModalNew = '';
    }

    editItem(item?: any) {
        this._ngZone.run(async () => {
            if (item) {
                this.item = item;
            } else {
                this.item = {} as any;
            }
            this.displayModalNew = 'active';
        });
    }
}

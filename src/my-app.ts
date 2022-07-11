import { IRoute, IRouteableComponent } from '@aurelia/router';
import { IHydratedController } from '@aurelia/runtime-html';
import { LifecycleFlags } from 'aurelia';
import { IDataService } from './data-service';

export class MyApp implements IRouteableComponent {

    static routes: IRoute[] = [
        {
            component: () => import('./components/home'),
            id: 'home',
            path: ''
        },
        {
            component: () => import('./components/create-invoice'),
            id: 'create-invoice',
            path: 'create-invoice'
        },
        {
            component: () => import('./components/invoices'),
            id: 'invoices',
            path: 'invoices'
        },
        {
            component: () => import('./components/invoice'),
            id: 'invoice',
            path: 'invoice/:id'
        },
        {
            component: () => import('./components/settings'),
            id: 'settings',
            path: 'settings'
        }
    ];

    constructor(@IDataService private dataService: IDataService) {
    }   

    async binding(): Promise<void> {
        //await this.dataService.populateDb();
    }

}

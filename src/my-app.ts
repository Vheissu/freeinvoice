import { IRoute, IRouteableComponent } from '@aurelia/router';

export class MyApp implements IRouteableComponent {

    static routes: IRoute[] = [
        {
            component: () => import('./components/home'),
            id: 'home',
            path: ''
        }
    ];

}

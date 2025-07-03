import { Routes } from '@angular/router';
import { GraphsComponent } from '../components/graphs/graphs.component';
import { CounterComponent } from '../components/counter/counter.component';

export const routes: Routes = [

    {
        path: "graphs",
        component: GraphsComponent
    },
    {
        path: "counter",
        component: CounterComponent
    }
    
];

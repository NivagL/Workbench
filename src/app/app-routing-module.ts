import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//route views
import { WorkbenchComponent } from './component/workbench/workbench.component';
import { ClientWorkComponent } from './component/client-work/client-work/client-work.component';
import { RmWorkQaComponent } from './component/client-work/rm-work-qa/rm-work-qa.component';
import { RmWorkQaDetailComponent } from './component/client-work/rm-work-qa-detail/rm-work-qa-detail.component';
import { PageNotFoundComponent } from './component/not-found.component';
import { WorkOrderComponent } from './component/work-order/work-order.component';
import { StyleguideComponent } from './component/styleguide/styleguide.component';
import { WorkOrderDetailComponent } from './component/work-order/workorder-detail/workorder-detail.component';
import { WorkOrderActivityComponent } from './component/workorder-activity/workorder-activity.component';

const routes: Routes = [
    {
        path: '',
        component: WorkbenchComponent
    },
    // {
    //     path: 'wb',
    //     component: WorkbenchComponent
    // },
    {
        path: 'cw',
        component: ClientWorkComponent
    },
    {
        path: 'rmqa',
        component: RmWorkQaComponent
    },
    {
        path: 'rmqa/detail',
        component: RmWorkQaDetailComponent
    },
    {
        path: 'workorder',
        component: WorkOrderComponent
    },
    {
        path: 'foobarorder',
        component: WorkOrderComponent
    },
    {
        path: 'workorder/detail/:workOrderId',
        component: WorkOrderDetailComponent
    },
    {
        path: 'workorder-activities/:workOrderId',
        component: WorkOrderActivityComponent
    },
    {
        path: 'styleguide',
        component: StyleguideComponent
    },
    { 
        path: '**',
        component: PageNotFoundComponent 
        // redirectTo: 'work' 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
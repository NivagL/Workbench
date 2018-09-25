import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

//route views
import { WorkbenchComponent } from './component/workbench/workbench.component';
import { ClientWorkComponent } from './component/client-work/client-work/client-work.component';
import { RmWorkQaComponent } from './component/client-work/rm-work-qa/rm-work-qa.component';
import { RmWorkQaDetailComponent } from './component/client-work/rm-work-qa-detail/rm-work-qa-detail.component';
import { PageNotFoundComponent } from './component/not-found.component';
import { WorkorderComponent } from './component/workorder/workorder.component';

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
        component: WorkorderComponent
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
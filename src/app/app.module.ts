import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import 'hammerjs';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

// import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';

import { AgmCoreModule, GoogleMapsAPIWrapper} from '@agm/core'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule, MatToolbar } from '@angular/material';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AppComponent } from './app.component';

import { DateService } from './service/date.service'
import { SdkMapComponent } from './component/map/sdk-map/sdk-map.component'
import { PageNotFoundComponent } from './component/not-found.component'
import { ChatHomeComponent } from './component/chat-home/chat-home.component';

import { PieChartComponent } from './component/google-charts/pie-chart/pie-chart.component';
import { LineChartComponent } from './component/google-charts/line-chart/line-chart.component';
import { ColumnChartComponent } from './component/google-charts/column-chart/column-chart.component';

import { PieChartService } from './service/google-charts/pie-chart.service'
import { LineChartService } from './service/google-charts/line-chart.service';
import { ColumnChartService } from './service/google-charts/column-chart.service';

import { DamageCauseComponent } from './component/static/damage-cause/damage-cause.component';
import { ConfigurationService } from './service/configuration.service';
import { DamageCauseService } from './service/damage-cause.service';
import { DamageSubCauseComponent } from './component/static/damage-sub-cause/damage-sub-cause.component';
import { DamageComponent } from './component/static/damage/damage.component';
import { WorkTypeComponent } from './component/static/work-type/work-type.component';
import { ActivityComponent } from './component/static/activity/activity.component';
import { NetworkTypeComponent } from './component/static/network-type/network-type.component';
import { AssetTypeComponent } from './component/static/asset-type/asset-type.component';
import { AssetSubTypeComponent } from './component/static/asset-sub-type/asset-sub-type.component';
import { ClientComponent } from './component/static/client/client.component';

import { WorkbenchComponent } from './component/workbench/workbench.component';
import { ClientWorkComponent } from './component/client-work/client-work/client-work.component';
import { RmWorkComponent } from './component/client-work/rm-work/rm-work.component';
import { RmWorkQaComponent } from './component/client-work/rm-work-qa/rm-work-qa.component';
import { RmWorkQaListComponent } from './component/client-work/rm-work-qa-list/rm-work-qa-list.component';
import { TaskTypeComponent } from './component/static/task-type/task-type.component';
import { TaskCategoryComponent } from './component/static/task-category/task-category.component';
import { RmWorkQaDetailComponent } from './component/client-work/rm-work-qa-detail/rm-work-qa-detail.component';
import { TaskTodayComponent } from './component/client-work/charts/task-today/task-today.component';
import { IssueTodayComponent } from './component/client-work/charts/issue-today/issue-today.component';
import { IssueByDateComponent } from './component/client-work/charts/issue-by-date/issue-by-date.component';
import { TaskByDateComponent } from './component/client-work/charts/task-by-date/task-by-date.component';
import { TaskByClientComponent } from './component/client-work/charts/task-by-client/task-by-client.component';
import { EmployeeByWorkTypeComponent } from './component/field-work/charts/employee-by-work-type/employee-by-work-type.component';
import { FieldWorkComponent } from './component/field-work/field-work/field-work.component';
import { WorkOrderComponent } from './component/work-order/work-order.component';
import { WorkOrderDetailComponent } from './component/work-order/work-order-detail/work-order-detail.component';
import { StyleguideComponent } from './component/styleguide/styleguide.component';
import { WorkorderActivityComponent } from './component/workorder-activity/workorder-activity.component';

// // configuring providers
// import { Configuration, ConfigurationParameters } from './typescript-angular/configuration';
// import { ApiModule } from './typescript-angular/api.module';

// // export function apiConfigFactory (): Configuration => {
// //   const params: ConfigurationParameters = {
// //     // set configuration parameters here.
// //   }
// //   return new Configuration(params);
// // }

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SdkMapComponent,
    DamageCauseComponent,
    DamageSubCauseComponent,
    DamageComponent,
    WorkTypeComponent,
    ActivityComponent,
    NetworkTypeComponent,
    AssetTypeComponent,
    AssetSubTypeComponent,
    ClientComponent,
    WorkbenchComponent,
    ClientWorkComponent,
    RmWorkComponent,
    RmWorkQaComponent,
    ChatHomeComponent,
    RmWorkQaListComponent,
    PieChartComponent,
    LineChartComponent,
    ColumnChartComponent,
    TaskTypeComponent,
    TaskCategoryComponent,
    RmWorkQaDetailComponent,
    TaskTodayComponent,
    IssueTodayComponent,
    IssueByDateComponent,
    TaskByDateComponent,
    TaskByClientComponent,
    EmployeeByWorkTypeComponent,
    FieldWorkComponent,
    WorkOrderComponent,
    WorkOrderDetailComponent,
    StyleguideComponent,
    WorkorderActivityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    HttpClientModule,
    HttpModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    // RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD8V-SvorT3WRs5MGBo6j8kiD4W7j8G_f0'
    }),
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatTabsModule, 
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatGridListModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatChipsModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatStepperModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatButtonModule,
    // // ApiModule.forRoot(apiConfigFactory),
    // ApiModule,
  ],
  providers: [
    GoogleMapsAPIWrapper,
    ConfigurationService,
    DamageCauseService,
    PieChartService,
    DateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

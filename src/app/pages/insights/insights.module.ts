import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateNewCollectionComponent } from './create-new-collection/create-new-collection.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { CollectionListComponent } from './collection-list/collection-list.component';
import { ReportsComponent } from '@src/app/_metronic/layout/components/toolbar/reports/reports.component';
import { InsightsComponent } from './insights/insights.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DropdownMenusModule } from '@src/app/_metronic/partials';
import { CollectionDetailsComponent } from './collection-details/collection-details.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { InsightsAnalysisComponent } from './insights-analysis/insights-analysis.component';
import { NewsHistoryComponent } from './news-history/news-history.component';
import { NewInBoxComponent } from './new-in-box/new-in-box.component';
import { InboxActionComponent } from './inbox-action/inbox-action.component';



@NgModule({
  declarations: [CreateNewCollectionComponent, CollectionListComponent, InsightsComponent, CollectionDetailsComponent, CreateNewsComponent, InsightsAnalysisComponent, NewsHistoryComponent, NewInBoxComponent, InboxActionComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',

        children: [
          {
            path: "create-new-collection",
            component: CreateNewCollectionComponent
          },
          {
            path: "collection-list",
            component: CollectionListComponent
          },
          {
            path: "insights",
            component: InsightsComponent
          },
          {
            path: 'collection-details-list',
            component: CollectionDetailsComponent
          },
          {
            path: 'create-news',
            component: CreateNewsComponent
          },
          {
            path: 'insights-analysis',
            component: InsightsAnalysisComponent
          },
          {
            path: 'news-hisotry',
            component: NewsHistoryComponent
          },
          {
            path: 'news-inbox',
            component: NewInBoxComponent
          },
          {
            path: 'news-inbox-action',
            component: InboxActionComponent
          }
        ]
      }]),
    CommonModule, SharedModule, MaterialModule, NgApexchartsModule, DropdownMenusModule
  ]
})
export class InsightsModule { }

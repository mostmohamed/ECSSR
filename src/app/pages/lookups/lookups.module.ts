import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './countries/countries.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@shared/material.module';
import { LookupsComponent } from './lookups.component';
import { ResourcesComponent } from './resources/resources.component';
import { MainCategoryComponent } from './main-category/main-category.component';
import { SubCategoryComponent } from './sub-category/sub-category.component';
import { NatureComponent } from './nature/nature.component';
import { MainKeyWordComponent } from './main-key-word/main-key-word.component';
import { SubKeyWordComponent } from './sub-key-word/sub-key-word.component';
import { LanguageComponent } from './language/language.component';
import { languages } from 'prismjs';
import { CountriesModalComponent } from './countries/countries-modal/countries-modal.component';
import { DropdownMenusModule } from '@src/app/_metronic/partials';
import { TranslationModule } from '@core/i18n';
import { LanguageModalComponent } from './language/language-modal/language-modal.component';
import { ResourceModalComponent } from './resources/resource-modal/resource-modal.component';
import { MainCategoryModalComponent } from './main-category/main-category-modal/main-category-modal.component';
import { SubCategoryModalComponent } from './sub-category/sub-category-modal/sub-category-modal.component';
import { MainKeywordModalComponent } from './main-key-word/main-keyword-modal/main-keyword-modal.component';
import { SubKeywordModalComponent } from './sub-key-word/sub-keyword-modal/sub-keyword-modal.component';
import { SynonymsComponent } from './synonyms/synonyms.component';
import { SynonymsModalComponent } from './synonyms/synonyms-modal/synonyms-modal.component';
import { NewsNatureModalComponent } from './nature/news-nature-model/news-nature-model.component';
import { NewsTypesComponent } from './news-types/news-types.component';
import { ClassificationsComponent } from './classifications/classifications.component';
import { ClassificationsModalComponent } from './classifications/classifications-modal/classifications-modal.component';
import { NewsTypesModalComponent } from './news-types/news-types-modal/news-types-modal.component';




@NgModule({
  declarations: [
    CountriesComponent,
    LookupsComponent,
    ResourcesComponent,
    MainCategoryComponent,
    SubCategoryComponent,
    NatureComponent,
    MainKeyWordComponent,
    SubKeyWordComponent,
    LanguageComponent,
    CountriesModalComponent,
    LanguageModalComponent,
    ResourceModalComponent,
    MainCategoryModalComponent,
    SubCategoryModalComponent,
    MainKeywordModalComponent,
    SubKeywordModalComponent,
    SynonymsComponent,
    SynonymsModalComponent,
    NewsNatureModalComponent,
    NewsTypesComponent,
    ClassificationsComponent,
    ClassificationsModalComponent,
    NewsTypesModalComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',

        children: [
          {
            path: "countries",
            component: CountriesComponent
          },
          {

            path: "resources",
            component: ResourcesComponent
          },
          {
            path: "main-category",
            component: MainCategoryComponent
          },
          {

            path: "sub-category",
            component: SubCategoryComponent
          },
          {
            path: "nature",
            component: NatureComponent
          }, {
            path: "synonyms",
            component: SynonymsComponent
          },
          {

            path: "main-keyword",
            component: MainKeyWordComponent
          }, {

            path: "sub-keyword",
            component: SubKeyWordComponent
          },
          {

            path: "language",
            component: LanguageComponent
          },
          {

            path: "news-types",
            component: NewsTypesComponent
          },
          {

            path: "news-classifications",
            component: ClassificationsComponent
          },
        ]
      },
    ]),
    CommonModule, SharedModule, DropdownMenusModule
  ]
})
export class LookupsModule { }

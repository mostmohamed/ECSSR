import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TranslationModule } from '../core/i18n';
import { InlineSVGModule } from 'ng-inline-svg-2';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, MaterialModule, TranslationModule, InlineSVGModule
  ],
  exports: [
    CommonModule, MaterialModule, TranslationModule, InlineSVGModule
  ]
})
export class SharedModule { }

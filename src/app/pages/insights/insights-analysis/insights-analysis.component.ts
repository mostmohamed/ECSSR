import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-insights-analysis',
  templateUrl: './insights-analysis.component.html',
  styleUrls: ['./insights-analysis.component.scss']
})
export class InsightsAnalysisComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  separatorKeysCodes2: number[] = [ENTER, COMMA];
  categoryCtrl = new FormControl('');
  filteredCategory: Observable<string[]>;
  category: string[] = ['English', 'Arabic'];
  allCategory: string[] = ['English', 'Arabic', 'Urdu', 'Hindi', 'Spanish'];
  @ViewChild('catInput') catInput: ElementRef<HTMLInputElement>;
  constructor() { 
    this.filteredCategory = this.categoryCtrl.valueChanges.pipe(startWith(null),
    map((category: string | null) => (category ? this._filterCategory(category) : this.allCategory.slice())),
  )
  }

  ngOnInit(): void {
  }
  private _filterCategory(value: string): string[] {
    const categoryvalue = value.toLowerCase();

    return this.allCategory.filter(fruit => fruit.toLowerCase().includes(categoryvalue));
  }
  selectedC(event: MatAutocompleteSelectedEvent): void {
    this.category.push(event.option.viewValue);
    this.catInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }
  addc(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.category.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.categoryCtrl.setValue(null);
  }
  removec(fruit: string): void {
    const index = this.category.indexOf(fruit);

    if (index >= 0) {
      this.category.splice(index, 1);
    }
  }
}

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-create-new-collection',
  templateUrl: './create-new-collection.component.html',
  styleUrls: ['./create-new-collection.component.scss']
})
export class CreateNewCollectionComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  separatorKeysCodes2: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl('');
  filteredFruits: Observable<string[]>;
  categoryCtrl = new FormControl('');
  filteredCategory: Observable<string[]>;

  fruits: string[] = ['Safea'];
  allFruits: string[] = ['Safea', 'Maitha', 'Sara', 'Salma'];
  category: string[] = ['UAE', 'الإمارات'];
  allCategory: string[] = ['UAE', 'EGYPT', 'الإمارات', 'السعودية', 'KSA'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('catInput') catInput: ElementRef<HTMLInputElement>;
  constructor() {
    this.filteredCategory = this.categoryCtrl.valueChanges.pipe(startWith(null),
      map((category: string | null) => (category ? this._filterCategory(category) : this.allCategory.slice())),
    )
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }
  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
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

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  removec(fruit: string): void {
    const index = this.category.indexOf(fruit);

    if (index >= 0) {
      this.category.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  selectedC(event: MatAutocompleteSelectedEvent): void {
    this.category.push(event.option.viewValue);
    this.catInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
  private _filterCategory(value: string): string[] {
    const categoryvalue = value.toLowerCase();

    return this.allCategory.filter(fruit => fruit.toLowerCase().includes(categoryvalue));
  }
}
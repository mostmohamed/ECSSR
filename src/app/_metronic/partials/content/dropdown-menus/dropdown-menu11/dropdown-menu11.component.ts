import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu11',
  templateUrl: './dropdown-menu11.component.html',
})
export class DropdownMenu11Component implements OnInit {
  @HostBinding('class') class =
    'menu menu-sub menu-sub-dropdown w-250px w-md-300px';
  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';

  constructor() { }

  ngOnInit(): void { }
}

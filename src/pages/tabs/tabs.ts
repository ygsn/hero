import { Component } from '@angular/core';

import { list } from '../list/list';
import { detail } from '../detail/detail';
import { update } from '../update/update';
import { add } from '../add/add';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = list;
  tab2Root: any = detail;
  tab3Root: any = update;
  tab4Root: any = add;

  constructor() {

  }
}

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { add } from '../pages/add/add';
import { detail } from '../pages/detail/detail';
import { list } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import { update } from '../pages/update/update';

@NgModule({
  declarations: [
    MyApp,
    add,
    detail,
    list,
    TabsPage,
    update
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    add,
    detail,
    list,
    TabsPage,
    update
  ],
  providers: []
})
export class AppModule {}

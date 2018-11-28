/**
 * Created by cyb on 2018/11/28.
 */
import { NgModule } from '@angular/core';
import {HomeRoutingModule} from './home.routing'
import {HomeComponent} from "./home.component";
@NgModule({
  imports : [
    HomeRoutingModule
  ],
  providers : [],
  declarations:[
    HomeComponent
  ]
})

export class HomeModule {

}

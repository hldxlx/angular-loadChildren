/**
 * Created by cyb on 2018/11/28.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameComponent} from "../game/game.component";
import {MusicComponent} from "../music/music.component";

const routes: Routes = [
  {
    path: 'game',
    component: GameComponent
  },
  {
    path:'music',
    component:MusicComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule{ }

import { Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BillEntryFormComponent } from './bill-entry-form/bill-entry-form.component';

export const routes: Routes = [
    {path:'' , component: DashBoardComponent , pathMatch: 'full'},
    {path:'tax',component: BillEntryFormComponent},
    {path:'**', component: NotFoundComponent}
];

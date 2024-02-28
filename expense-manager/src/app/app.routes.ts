import { Routes } from '@angular/router';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ExpenseGuard } from './expense.guard';
import { EditEntryComponent } from './edit-entry/edit-entry.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ExpenseGuard]   // Required for redirect if user is already logged in.   
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'expenses',
    component: ExpenseEntryListComponent,
    title: 'Expense Entry List',
    canActivate: [ExpenseGuard]
  },
  {
    path: 'expenses/detail/:id',
    component: ExpenseEntryComponent,
    title: 'Expense Entry',
    canActivate: [ExpenseGuard]
  },
  {
    path: 'expenses/add',
    component: EditEntryComponent,
    canActivate: [ExpenseGuard]
  },
  {
    path: 'expenses/edit/:id',
    component: EditEntryComponent,
    canActivate: [ExpenseGuard]
  },
  {
    path: 'about',
    component: AboutComponent    
  },
  {
    path: '',
    redirectTo: 'expenses',
    pathMatch: 'full'
  }
];

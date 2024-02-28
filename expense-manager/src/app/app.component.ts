import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { DebugComponent } from './debug/debug.component';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, ExpenseEntryComponent, ExpenseEntryListComponent, DebugComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Expense Manager';

  isUserLoggedIn = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {

    let storeData = localStorage.getItem("isUserLoggedIn");
    console.log("StoreData: " + storeData);

    if (storeData != null && storeData == "true")
      this.isUserLoggedIn = true;
    else
      this.isUserLoggedIn = false;
  }
}

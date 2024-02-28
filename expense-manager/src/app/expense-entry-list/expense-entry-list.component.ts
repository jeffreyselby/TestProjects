import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // Required for DatePipe
import { ExpenseEntry } from '../expense-entry';
import { DebugService } from '../debug.service';
import { DebugComponent } from '../debug/debug.component';
import { ExpenseEntryService } from '../expense-entry.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-expense-entry-list',
  standalone: true,
  imports: [CommonModule, DebugComponent, RouterModule],
  templateUrl: './expense-entry-list.component.html',
  styleUrl: './expense-entry-list.component.scss',
  providers: [DebugService, ExpenseEntryService]
})
export class ExpenseEntryListComponent {

  title: string = "";
  expenseEntries: ExpenseEntry[] = [];
  constructor(private debugService: DebugService, private expenseEntryService: ExpenseEntryService) {    

  }

  ngOnInit() {

    this.debugService.info('Expense Entry List component initialized');
    this.title = "Expense Entry List";
    this.getExpenseEntries();
  }
  
  getExpenseEntries() {

    this.expenseEntryService.getExpenseEntries().subscribe(data => this.expenseEntries = data);
    
  }

  deleteExpenseEntry(event: MouseEvent, id: string): void {
    
    event.preventDefault();
    
    if (confirm("Are you sure to delete the entry?")) {
      this.expenseEntryService.deleteExpenseEntry(id)
        .subscribe(data => console.log(data));

      this.getExpenseEntries();
    }
  }
}

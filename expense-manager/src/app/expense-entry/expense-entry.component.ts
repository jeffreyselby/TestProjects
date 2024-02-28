import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-expense-entry',
  standalone: true,
  imports: [],
  templateUrl: './expense-entry.component.html',
  styleUrl: './expense-entry.component.scss'
})
export class ExpenseEntryComponent implements OnInit {
  title: string = "";
  expenseEntry$!: Observable<ExpenseEntry>;
  expenseEntry: ExpenseEntry = {} as ExpenseEntry;
  selectedId: number = 0;

  constructor(private expenseEntryService: ExpenseEntryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.title = "Expense Entry";

    // Approach #1
    this.expenseEntry$ = this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get('id'));
        return this.expenseEntryService.getExpenseEntry(this.selectedId);
      }));
        
    this.expenseEntry$.subscribe((data) => this.expenseEntry = data);

    // Approach #2
    this.selectedId = Number(this.activatedRoute.snapshot.params['id']);
    this.expenseEntryService.getExpenseEntry(this.selectedId).subscribe(data => this.expenseEntry = data);

    //this.expenseEntry = {
    //  id: 1,
    //  item: "Pizza",
    //  amount: 21,
    //  category: "Food",
    //  location: "Zomato",
    //  spendOn: new Date(2020, 6, 1, 10, 10, 10),
    //  createdOn: new Date(2020, 6, 1, 10, 10, 10)
    //};
  }

  goToList() {
    this.router.navigate(['/expenses']);
  }

  goToEdit() {
    this.router.navigate(['/expenses/edit', this.selectedId]);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseEntry } from '../expense-entry';
import { ExpenseEntryService } from '../expense-entry.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-entry',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-entry.component.html',
  styleUrl: './edit-entry.component.scss'
})
export class EditEntryComponent implements OnInit {

  //id: number = 0;
  //item: string = "";
  //amount: number = 0;
  //category: string = "";
  //location: string = "";
  //spendOn: Date = new Date();

  selectedId: number = 0;
  formData!: FormGroup;  
  expenseEntry!: ExpenseEntry;

  constructor(private expenseEntryService: ExpenseEntryService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.formData = new FormGroup({

      id: new FormControl(),
      item: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
      category: new FormControl(),
      location: new FormControl(),
      spendOn: new FormControl()
    });

    this.selectedId = Number(this.activatedRoute.snapshot.params['id']);

    if (this.selectedId != null && this.selectedId != 0) {

      this.expenseEntryService.getExpenseEntry(this.selectedId)
        .subscribe((data) => {

          this.expenseEntry = data;
          this.formData.controls['id'].setValue(this.expenseEntry.id);
          this.formData.controls['item'].setValue(this.expenseEntry.item);
          this.formData.controls['amount'].setValue(this.expenseEntry.amount);
          this.formData.controls['category'].setValue(this.expenseEntry.category);
          this.formData.controls['location'].setValue(this.expenseEntry.location);
          this.formData.controls['spendOn'].setValue(this.expenseEntry.spendOn);
        });
    }
  }

  get itemValue() {
    return this.formData.get('item');
  }

  get amountValue() {
    return this.formData.get('amount');
  }

  onClickSubmit(data: ExpenseEntry) {
    console.log('onClickSubmit fired');
    //this.id = data.id;
    //this.item = data.item;
    //this.amount = data.amount;
    //this.category = data.category;
    //this.location = data.location;
    //this.spendOn = data.spendOn;

    let expenseEntry: ExpenseEntry = {

      id: data.id,
      item: data.item,
      amount: data.amount,
      category: data.category,
      location: data.location,
      spendOn: data.spendOn,
      createdOn: new Date()
    }
    console.log(expenseEntry);

    if (expenseEntry.id == null || expenseEntry.id == "0") {
      console.log('Add function fired');
      this.expenseEntryService.addExpenseEntry(expenseEntry)
        .subscribe(data => { console.log(data); this.router.navigate(['/expenses']) });
    } else {
      console.log('Edit function fired');
      this.expenseEntryService.updateExpenseEntry(expenseEntry)
        .subscribe(data => { console.log(data); this.router.navigate(['/expenses']) });

    }
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, flatMap, map, mergeMap, retry } from 'rxjs/operators';

import { ExpenseEntry } from './expense-entry';



@Injectable({
  providedIn: 'root'
})
export class ExpenseEntryService {

  // Must run in a separate command window the following:
  //    json-server --watch src/assets/expenses.json
  //
  //  "json-server" allows data to be queried and modified.
  //  The file assets/expenses.json will be directly modified.
  //    GET     http://localhost:3000/expenses?id=3   Single element array
  //    GET     http://localhost:3000/expenses        All expenses
  //    POST    http://localhost:3000/expenses
  //    PUT     http://localhost:3000/expenses/7
  //    DELETE  http://localhost:3000/expenses/1
  //
  //    NOTE:   json-server requires that the id property is a string.
  //            Otherwise record cannot be found.
  private expenseRestUrl = 'http://localhost:3000/expenses';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private httpClient: HttpClient) { }

  getExpenseEntries(): Observable<ExpenseEntry[]> {
    return this.httpClient.get<ExpenseEntry[]>(this.expenseRestUrl, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler));

  }

  getExpenseEntry(id: number): Observable<ExpenseEntry> {

    // HttpClient.get returns an array. Get first item of array.
    return this.httpClient.get<ExpenseEntry[]>(`${this.expenseRestUrl}?id=${id}`, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler), map(response => response[0]));
  }

  addExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {

    return this.getExpenseEntries().pipe(
      mergeMap(expenseEntries => {
        //var maximumId = Math.max(...array.map(entry => entry.id))

        const lastExpenseEntry: ExpenseEntry = expenseEntries.reduce(function (prev, current) {
          return (prev && prev.id > current.id) ? prev : current
        });

        const newId: number = Number(lastExpenseEntry.id) + 1;

        expenseEntry.id = String(newId);

        return this.httpClient.post<ExpenseEntry>(this.expenseRestUrl, expenseEntry, this.httpOptions)
          .pipe(retry(3),
            catchError(this.httpErrorHandler)
          );
      })
    )    
  }

  updateExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
    return this.httpClient.put<ExpenseEntry>(`${this.expenseRestUrl}/${expenseEntry.id}`, expenseEntry, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.httpErrorHandler)
      );
  }

  deleteExpenseEntry(expenseEntry: ExpenseEntry | string): Observable<ExpenseEntry> {
    const id = typeof expenseEntry == 'string' ? expenseEntry : expenseEntry.id;
    const url = `${this.expenseRestUrl}/${id}`;

    return this.httpClient.delete<ExpenseEntry>(url, this.httpOptions)
      .pipe(retry(3), catchError(this.httpErrorHandler))
  }

  private httpErrorHandler(error: HttpErrorResponse) {

    if (error.error instanceof ErrorEvent) {
      console.error("A client side error occurs. The error message is " + error.message);
    } else {
      console.error("An error happened in server. The HTTP status code is " + error.status + " and the error returned is " + error.message);
    }

    return throwError(() => "Error occurred. Please try again.");

  }

}

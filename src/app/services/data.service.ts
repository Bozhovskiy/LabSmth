import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { type Observable, of } from "rxjs"
import { catchError, delay, tap } from "rxjs/operators"
import { environment } from "../../environments/environment"

@Injectable({
  providedIn: "root",
})
export class DataService {
  private apiUrl = environment.apiUrl
  private cachedUserData: any = null

  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    // If we have cached data, return it
    if (this.cachedUserData) {
      return of(this.cachedUserData)
    }

    // In a real app, this would be a real API call
    // For demo purposes, we'll simulate an API response
    return of({
      hobbies: ["Playing Football", "Reading Books", "Traveling"],
      name: "John",
      surname: "Parker",
    }).pipe(
      delay(800), // Simulate network delay
      tap((data) => (this.cachedUserData = data)),
      catchError(this.handleError<any>("getUserData")),
    )
  }

  private handleError<T>(operation = "operation") {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error)
      return of({} as T)
    }
  }
}

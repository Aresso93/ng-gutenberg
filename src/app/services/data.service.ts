import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap } from 'rxjs';
import { Author, Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly BASE_URL = 'https://gutendex.com/books/';

  constructor(private http: HttpClient) {}

  getAllBooks():Observable<Book[]>{
    console.log('return');
    return this.http.get<any>(this.BASE_URL).pipe(
      tap(data => console.log('data', data.results)),
      map(data => data.results),
      tap(data => console.log('data', data)
      )
    )
  }

  getSingleBook(id:string){
    console.log('singolo libro', id);
    return this.http.get<Book>(this.BASE_URL + id);
  }

  getAuthorArray(id:string){
    console.log('autore del libro con ID: ', id);
    return this.http.get<Author>(this.BASE_URL + id).pipe(
      tap(authors => console.log(authors)),
      map(book => book)
    );
  }


}

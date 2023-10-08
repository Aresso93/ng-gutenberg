import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  bookArray: Book[] = []

  
  constructor(private dataServ: DataService){}

  ngOnInit(): void {
    console.log('bookArray vuoto', this.bookArray);
    this.dataServ.getAllBooks().subscribe(bookData => {
    this.bookArray = bookData 
    console.log('bookArray', this.bookArray);

    })
  }

}

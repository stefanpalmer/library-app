import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})
export class NovelComponent implements OnInit {

  novelForm!: FormGroup;

  constructor(private route: ActivatedRoute, 
    private bookService: BookService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.bookService.addBook(this.novelForm.value);
    this.router.navigate(['../library'], {relativeTo: this.route});
  }

  private initForm() {
    let novelTitle = '';
    let novelAuthor = '';
    let novelPublisher = '';
    let novelYear = null;
    let novelPages = null;
    let novelSeries = '';
    let novelSeriesNum = null;
    let novelStories = new FormArray([]);
    let novelIsbn = '';
    let novelReview = '';
    
    this.novelForm = new FormGroup({
      'title': new FormControl(novelTitle),
      'author': new FormControl(novelAuthor),
      'publisher': new FormControl(novelPublisher),
      'year': new FormControl(novelYear),
      'pages': new FormControl(novelPages),
      'series': new FormControl(novelSeries),
      'seriesNum': new FormControl(novelSeriesNum),
      'stories': novelStories,
      'isbn': new FormControl(novelIsbn),
      'review': new FormControl(novelReview)
    })
    
  }
}

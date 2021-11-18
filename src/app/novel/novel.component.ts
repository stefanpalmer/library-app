import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-novel',
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css']
})
export class NovelComponent implements OnInit {

  novelForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
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

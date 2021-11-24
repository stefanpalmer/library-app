import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { BookService } from '../shared/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anthology',
  templateUrl: './anthology.component.html',
  styleUrls: ['./anthology.component.css']
})

export class AnthologyComponent implements OnInit {
  id!: number;
  anthologyForm!: FormGroup;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  getControls() {
    return (<FormArray>this.anthologyForm.get('stories')).controls;
  }

  onSubmit() {
    this.bookService.addBook(this.anthologyForm.value);
    this.router.navigate(['../library']);
  }

  onAddStory() {
    (<FormArray>this.anthologyForm.get('stories')).push(
      new FormGroup({
        'title': new FormControl(null),
        'author': new FormControl(null)
      })
    );
  }

  onDeleteStory(index: number) {
    (<FormArray>this.anthologyForm.get('stories')).removeAt(index);
  }

  private initForm() {
    let anthologyTitle = '';
    let anthologyEditor = '';
    let anthologyPublisher = '';
    let anthologyYear = null;
    let anthologyPages = null;
    let anthologyIsbn = '';
    let anthologyStories = new FormArray([]);
    let anthologyReview = '';

    this.anthologyForm = new FormGroup ({
      'title': new FormControl(anthologyTitle),
      'author': new FormControl(anthologyEditor),
      'publisher': new FormControl(anthologyPublisher),
      'year': new FormControl(anthologyYear),
      'pages': new FormControl(anthologyPages),
      'isbn': new FormControl(anthologyIsbn),
      'stories': anthologyStories,
      'review': new FormControl(anthologyReview)
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { BookService } from '../shared/book.service';


@Component({
  selector: 'app-anthology',
  templateUrl: './anthology.component.html',
  styleUrls: ['./anthology.component.css']
})

export class AnthologyComponent implements OnInit {
  id!: number;
  anthologyForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  getControls() {
    return (<FormArray>this.anthologyForm.get('stories')).controls;
  }

  onAddStory() {
    (<FormArray>this.anthologyForm.get('stories')).push(
      new FormGroup({
        'title': new FormControl(null),
        'author': new FormControl(null)
      })
    );
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
      'editor': new FormControl(anthologyEditor),
      'publisher': new FormControl(anthologyPublisher),
      'year': new FormControl(anthologyYear),
      'pages': new FormControl(anthologyPages),
      'isbn': new FormControl(anthologyIsbn),
      'stories': anthologyStories,
      'review': new FormControl(anthologyReview)
    });
  }


}

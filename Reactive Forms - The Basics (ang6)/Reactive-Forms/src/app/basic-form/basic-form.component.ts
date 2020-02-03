import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      message: 'this is the default value',
      cars: ''
      });

    // calling upon .valueChanges makes this into an observable in which we can subscribe to
    this.myForm.valueChanges.subscribe(console.log);

  }

}

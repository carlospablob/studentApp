import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formStudent: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loadFormRegister();
  }

  loadFormRegister() {
    this.formStudent = this.fb.group({
      name: [null, Validators.required],
      firtsName: [null, Validators.required],
      lastName: [null, Validators.required],
      street: [null, Validators.required],
      city: [null, Validators.required],
      phone: [null, Validators.required],
      gpa: [null, Validators.required]
    })
  }

}

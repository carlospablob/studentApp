import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UUID } from 'angular2-uuid';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from './../../actions/student.actions';
import {StudentModel} from '../../models/student.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formStudent: FormGroup;

  uuidValue: string;

  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.loadFormRegister();
  }

  loadFormRegister() {
    this.formStudent = this.fb.group({
      id: [this.generateUUID(), Validators.required],
      name: [null, Validators.required],
      firtsName: [null, Validators.required],
      lastName: [null, Validators.required],
      address: this.fb.group({
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipcode: [null, Validators.required],
      }),
      phone: [null, Validators.required],
      gpa: [null, Validators.required]
    });
  }
  generateUUID() {
    this.uuidValue = UUID.UUID();
    return this.uuidValue;
  }

  sendDataOfStudent() {
    if (this.formStudent.invalid) { return ; }
    this.store.dispatch(actions.createStudent(new StudentModel(this.formStudent.value)));
    this.formStudent.reset();
  }
}

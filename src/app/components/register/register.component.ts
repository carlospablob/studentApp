import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { UUID } from 'angular2-uuid';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import * as actions from './../../actions/student.actions';
import {StudentModel} from '../../models/student.model';
import {MatDialogRef} from '@angular/material';
import {ModalResponseEnum} from '../../enum/modalResponse.enum';

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
    public dialogRef: MatDialogRef<RegisterComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loadFormRegister();
  }

  loadFormRegister() {
    this.formStudent = this.fb.group({
      id: [this.generateUUID(), Validators.required],
      name: [null, [
        Validators.required,
        Validators.maxLength(50)
      ]],
      firtsName: [null, [
        Validators.required,
        Validators.maxLength(50)
      ]],
      lastName: [null, [
        Validators.required,
        Validators.maxLength(50)
      ]],
      address: this.fb.group({
        street: [null, [
          Validators.required,
          Validators.maxLength(50)
        ]],
        city: [null, [
      Validators.required,
      Validators.maxLength(50)
    ]],
        state: [null, [
          Validators.required,
          Validators.maxLength(50)
        ]],
        zipcode: [null, [
          Validators.required,
          Validators.maxLength(5)
        ]],
      }),
      phone: [null, [
        Validators.required,
        Validators.maxLength(13)
      ]],
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
    this.dialogRef.close(ModalResponseEnum.MESSAGE);
  }
}

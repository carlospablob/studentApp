import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StudentModel} from "../../models/student.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as actions from "../../actions/student.actions";
import {ModalResponseEnum} from "../../enum/modalResponse.enum";
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  formStudent: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: StudentModel,
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<DetailComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loadFormRegister();
  }

  loadFormRegister() {
    this.formStudent = this.fb.group({
      id: [null, Validators.required],
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
    if (this.data) {
      console.log(this.data)
      this.formStudent.setValue(this.data);
    }
  }


  updateDataOfStudent() {
    if (this.formStudent.invalid) { return ; }
    console.log(this.formStudent.value)
    this.store.dispatch(actions.updateStudent(new StudentModel(this.formStudent.value)));
    this.dialogRef.close(ModalResponseEnum.MESSAGE);
  }
}

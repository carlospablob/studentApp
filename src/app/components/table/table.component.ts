import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {RegisterComponent} from '../register/register.component';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducer';
import {ModalResponseEnum} from '../../enum/modalResponse.enum';
import {SnackbarService} from '../../services/snackbar.service';
import * as actions from './../../actions/student.actions';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'firtsName', 'lastName', 'phone', 'gpa', 'city', 'option'];
  dataSource;


  constructor(
    public dialog: MatDialog,
    private store: Store<AppState>,
    private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.store.select('students')
      .subscribe(students => {
        this.dataSource = new MatTableDataSource(students);
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogRegisterStudent() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result === ModalResponseEnum.MESSAGE) {
        this.snackbarService.openSnackBar('El estudiante se ha registrado correctamente');
      }
    });
  }

  deleteStudent(id: string) {
    this.store.dispatch(actions.deleteStudent({id}));
    this.snackbarService.openSnackBar('Se ha eliminado correctamente.');
  }

}

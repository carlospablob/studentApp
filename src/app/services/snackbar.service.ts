import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarRef,
  MatSnackBarVerticalPosition
} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  snackBarConfig: MatSnackBarConfig;
  snackBarRef: MatSnackBarRef<any>;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  snackBarAutoHide = '4000';

  constructor(private snackBar: MatSnackBar) {
    this.snackBarConfig = new MatSnackBarConfig();
    this.snackBarConfig.horizontalPosition = this.horizontalPosition;
    this.snackBarConfig.verticalPosition = this.verticalPosition;
    this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
  }

  openSnackBar(message) {
    this.snackBarConfig.verticalPosition = 'bottom';
    this.snackBarRef = this.snackBar.open(message, '', this.snackBarConfig);
  }
}

import {createAction, props} from '@ngrx/store';
import {StudentModel} from '../models/student.model';

export const createStudent = createAction(
  '[CREATE] Create student',
  props<StudentModel>()
  );

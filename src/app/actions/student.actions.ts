import {createAction, props} from '@ngrx/store';
import {StudentModel} from '../models/student.model';

export const createStudent = createAction(
  '[CREATE] Create student',
  props<StudentModel>()
  );

export const deleteStudent = createAction(
  '[DELETE] Delete student',
  props<{id: string}>()
);

export const updateStudent = createAction(
  '[UPDATE] Update student',
  props<StudentModel>()
);

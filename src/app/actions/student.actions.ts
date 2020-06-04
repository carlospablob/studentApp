import {createAction, props} from '@ngrx/store';

export const createStudent = createAction(
  '[CREATE] Create student',
  props<{student: string}>()
  );

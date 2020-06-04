import { createReducer, on } from '@ngrx/store';
import {createStudent} from '../actions/student.actions';
import {StudentModel} from '../models/student.model';

export const initialState: StudentModel[] = [
  new StudentModel('hola')
];

const _createStudent = createReducer(initialState,
  on(createStudent, (state, {student}) => [...state, new StudentModel('demo')] ),
);

export function studentReducer(state, action) {
  return _createStudent(state, action);
}

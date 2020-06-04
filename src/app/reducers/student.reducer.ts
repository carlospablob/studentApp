import {createReducer, on} from '@ngrx/store';
import {createStudent, deleteStudent, updateStudent} from '../actions/student.actions';
import {StudentModel} from '../models/student.model';
import {DATA_STUDENTS} from "../dataStudents";

export const initialState: StudentModel[] = DATA_STUDENTS;

const _createStudent = createReducer(initialState,
  on(createStudent, (state, student) => [...state, student]),

  on(deleteStudent, (state, {id}) => state.filter(student => student.id !== id) ),

  on(updateStudent, (state, {student}) => {
    return state.map(item => {
      if (item.id === student.id) {
        return student;
      } else {
        return item;
      }
    })
  })
);

export function studentReducer(state, action) {
  return _createStudent(state, action);
}

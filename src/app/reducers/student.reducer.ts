import {createReducer, on} from '@ngrx/store';
import {createStudent, deleteStudent, updateStudent} from '../actions/student.actions';
import {StudentModel} from '../models/student.model';

export const initialState: StudentModel[] = [
  new StudentModel({
    id: 'kshdkfjasdkj',
    name: 'Carlos',
    firtsName: 'Pablo',
    lastName: 'Bautista',
    address: {
      street: 'Av. acueducto',
      city: 'México',
      state: 'México',
      zipcode: '52929',
    },
    phone: '5527310514',
    gpa: 'demo'
  })
];

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

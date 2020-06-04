import {createReducer, on} from '@ngrx/store';
import {createStudent} from '../actions/student.actions';
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
);

export function studentReducer(state, action) {
  return _createStudent(state, action);
}

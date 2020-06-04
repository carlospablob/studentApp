import {AddressModel} from './address.model';

export class StudentModel {
  id: string;
  name: string;
  firtsName: string;
  lastName: string;
  address: AddressModel;
  phone: string;
  gpa: string;

  constructor( init?: Partial<StudentModel> ) {
    Object.assign(this, init);
  }
}

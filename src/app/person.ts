export class Person{
  name : string;
  dob : Date;
  id : string;
  vorous : string;
  isAdmin : boolean;

  constructor(name : string, dob : Date, id : string, vorous : string, isAdmin : boolean){
    this.name = name;
    this.dob = dob;
    this.id = id;
    this.vorous = vorous;
    this.isAdmin = isAdmin;
  }
}

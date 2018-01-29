import { Person } from './person';

export class Party{
  id:string;
  name:string;
  date:Date;
  venue:string;
  budget:number;
  organiser:Person;
  contributors:Array<Person>;
  isAttending:boolean;

  constructor(id:string, name:string, date:Date, venue:string, budget:number, organiser:Person, contributors:Array<Person>, isAttending:boolean){
      this.id = id;
      this.name = name;
      this.date = date;
      this.venue = venue;
      this.budget = budget;
      this.organiser = organiser;
      this.contributors = contributors;
      this.isAttending = isAttending;
  }

}

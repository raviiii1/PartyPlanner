import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable()
export class SettingsService {

  team:Array<Person> = [
      new Person("Ravi Prakash",new Date(),"123","Carnivorous",true),
      new Person("Shanu Gupta", new Date(),"1234","Herbivorous",false)
    ];

  dlList : Array<any>;

  constructor() { }

  getTeam(){
    return this.team;
  }

  addTeamMember(member:Person){
    this.team.push(member);
  }

  deleteTeamMember(memberId){
    for(let mem of this.team){
      if(mem.id === memberId)
        this.team.splice(this.team.indexOf(mem),1);
    }
  }

  makeAdmin(memberId){
    for(let mem of this.team){
      if(mem.id === memberId)
        mem.isAdmin = true;
    }
  }

  createDL(newDL){
    this.dlList.push(newDL);
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SettingsService } from '../settings.service';

import { Person } from '../person'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['../../assets/styles/form.css', './settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private settingsService:SettingsService) { }

  team : Array<Person>;
  membersInDL : Array<Person>;

  ngOnInit() {
    this.team = this.settingsService.getTeam();
    this.membersInDL = [];
  }

  toggle(event){
    var nextEl = event.target.nextElementSibling;
    var settingItems = document.getElementsByClassName(nextEl.className);
    for(var i = 0; i < settingItems.length; i++){
      var item:HTMLElement = <HTMLElement>settingItems.item(i);
      if(item === nextEl){
        if(item.style.display === "block")
          item.style.display = "none";
        else
          item.style.display = "block";
      }
      else
        item.style.display = "none";
    }
  }

  addTeamMember(form:NgForm){
    var success = false;
    if(form.value.memberName && form.value.id && form.value.dob && form.value.vorous && form.value.admin){
      this.settingsService.addTeamMember(
        new Person(form.value.memberName,form.value.dob,form.value.id,form.value.vorous,form.value.admin)
      );
      success = true;
    }
    return success;
  }

  deleteTeamMember(form:NgForm){
    this.settingsService.deleteTeamMember(form.value.memberEmailId);
  }

  makeAdmin(form:NgForm){
    this.settingsService.makeAdmin(form.value.memberEmailId);
  }

  addMembersInDL(memIdInDL){
    for(var mem of this.team){
      if(mem.id === memIdInDL){
        this.membersInDL.push(mem);
      }
    }

  }

  removeMemInDL(mem){
    this.membersInDL.splice(this.membersInDL.indexOf(mem),1);
  }

  createDL(form:NgForm){
    this.settingsService.createDL({
      memList: this.membersInDL,
      dlName : form.value.dlName,
      dlId : "2234"
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {contact }from '../contact'


@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  public contactDB:contact;

  public warning:string;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm): void {
    if(f.value.name.length == 0 || f.value.email.length == 0||f.value.message.length == 0){
      this.warning = "Form is not valid"
    }

  }

}

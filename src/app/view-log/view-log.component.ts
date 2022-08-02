import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


interface Container{
  name: string;
  ID: string;

}
@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.css']
})



export class ViewLogComponent implements OnInit {
  oneContainer_Control = new FormControl<Container | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  animals: Container[] = [
    {name: 'First', ID: 'd4flk2lnlk1'},
    {name: 'Second', ID: 'd4flk2lnlk2!'},
    {name: 'Third', ID: 'd4flk2lnlk3'},
    {name: 'Fourth', ID: 'd4flk2lnlk4'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

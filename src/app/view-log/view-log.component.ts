import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import {FormControl, Validators} from '@angular/forms';
import { setLines } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';


interface Container{
  name: string;
  Status: string;
}
@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.css']
})



export class ViewLogComponent implements OnInit {
  selectedContainerName: string= "";
  selectedContainerStatus: string="";
  containerChosen:Boolean = false;
  debugMode:Boolean=true;
  oneContainer_Control = new FormControl<Container | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  containers: Container[] = [
    {name: 'First', Status: 'd4flk2lnlk1'},
    {name: 'Second', Status: 'd4flk2lnlk2!'},
    {name: 'Third', Status: 'd4flk2lnlk3'},
    {name: 'Fourth', Status: 'd4flk2lnlk4'},
  ];
  constructor( private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.readAndParseFile();
    if (this.debugMode) {
      this.containerChosen=true;
      this.selectedContainerName="Laban"
      this.selectedContainerStatus="Spooky"

    }
  }

  clickedButton(): void {
    
    console.log(this.selectedContainerName);
    if (this.selectedContainerName == ""){
      this.openSnackBar("You forgot to choose a container in the drop down list")
      return;
    }
    else{
      this.containerChosen = true;
    }
    for (let i = 0; i<this.containers.length;i++){
      if (this.containers[i].name == this.selectedContainerName){
        this.selectedContainerStatus=this.containers[i].Status;
        return;
      }
    }

  }
  readAndParseFile(): void {
    var allLinesInFile: String[][];
    fetch('assets/dockerinformation.txt')//This will need to be changed ofc
    .then(response => response.text())
    .then(text=> {
      //Take the long string and make each row its own array with 1 element in it; the string for that row.
      allLinesInFile = text.split('\n').map((line) => line.split('\t'));
      this.containers=[];
      //The first and last array are pretty useless, just headers and an empty space. 
      //Start at index 1 and finish with next-to last
      for (let i = 1; i<allLinesInFile.length-1; i++){

        //Access the name of the container
        let temp1=allLinesInFile[i][0].split('   ');
        let containerName=temp1[temp1.length-1];      
        
        //Accessing the status of the container
        let othertemp=allLinesInFile[i][0].split('ago   ');
        let statusline=othertemp[1];
        statusline=statusline.trim();
        let containerStatus=statusline.split('0.0')[0];
        this.containers.push({name:containerName,Status:containerStatus})

      }
      console.log(this.containers);
    } )

    
    return ;
  }
  openSnackBar(message: string){

    this._snackBar.open(message, "Ok!");
  }
  choiceIsChanged(): void {
    this.containerChosen=false;
  }
}

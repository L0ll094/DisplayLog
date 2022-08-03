import { Component, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
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
  selectedContainer: string= "";
  containerChosen:Boolean = false;
  oneContainer_Control = new FormControl<Container | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  containers: Container[] = [
    {name: 'First', ID: 'd4flk2lnlk1'},
    {name: 'Second', ID: 'd4flk2lnlk2!'},
    {name: 'Third', ID: 'd4flk2lnlk3'},
    {name: 'Fourth', ID: 'd4flk2lnlk4'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  clickedButton(): void {
    this.containerChosen = !this.containerChosen;
  }
  readAndParseFile(): string {
    var allLinesInFile: String[][];


    fetch('assets/dockerinformation.txt')
    .then(response => response.text())
    .then(text=> {
      allLinesInFile = text.split('\n').map((line) => line.split('\t'));
      console.log("Before:");
      console.log(allLinesInFile);
      for (let i = 0; i<allLinesInFile.length-1; i++){
        let temp1=allLinesInFile[i][0].split('   ');
        console.log("After:");
        console.log(allLinesInFile);
       
        //Access the name of the container
        console.log("Name:");
        console.log(temp1[temp1.length-1]);
        
        //Accessing the status of the container
        //console.log(allLinesInFile[i][0].split('ago   '))
        let othertemp=allLinesInFile[i][0].split('ago   ');
        let statusline=othertemp[1];
        console.log(statusline);
        let status="hi";//statusline.split('0.0');

        console.log("Status:");
        console.log(status);
      }
      //console.log("LinesSeparatedByThreeSpaces");
      //onsole.log(linesSeparatedByThreeSpaces);
      //let firstLine=allLinesInFile[1][0].split('ago   ');
      //let status=firstLine[1].split('0.0')[0];
 
    } )

    //parsedString = tabbedString.split('\n').map((line) => line.split('\t'))
    return "hello";
  }
}

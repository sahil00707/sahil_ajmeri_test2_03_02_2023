import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataType } from '../data-type';
import { MyserviceService } from '../myservice.service';
import { filter } from "rxjs/operators";
@Component({
  selector: 'app-ball-in-court',
  templateUrl: './ball-in-court.component.html',
  styleUrls: ['./ball-in-court.component.scss']
})
export class BallInCourtComponent {
  programData: any;
  projectData: any;
  projectList: any = [];
  ngOnInit() {
    this.myservice.getProgram().subscribe(res => {
      this.programData = res

    });
    this.myservice.getProject().
      subscribe(res => {
        this.projectData = res
      })
  }

  showList(val: string) {
    for (var i = 0; i < 17; i++) {
      var c = 0;
      if (val == this.projectData.virtualProgramDetails[i].programID) {
        for (var j = 0; j < this.projectList.length; j++) {
          if (this.projectList[j] == this.projectData.virtualProgramDetails[i].projectName) {
            c++;
          }
        }
        if (!c)
          this.projectList.push(this.projectData.virtualProgramDetails[i].projectName);
      }
    }
  }


  constructor(private http: HttpClient, private myservice: MyserviceService) {

  }
}
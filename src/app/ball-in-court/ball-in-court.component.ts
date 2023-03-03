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
  d: any = [];
  des: any = [];
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
        for (var j = 0; j < this.d.length; j++) {
          if (this.d[j] == this.projectData.virtualProgramDetails[i].projectName) {
            c++;
          }
        }
        if (!c)
          this.d.push(this.projectData.virtualProgramDetails[i].projectName);
      }
    }
  }

  //   removeDuplicates(data: any) {
  // //     for (var i = 0; i < data.length; i++) {
  // //       var c = 0;
  // //       for (var j = i + 1; j < data.length; j++) {
  // //         if (data[i] == data[j])
  // //           c++;
  // //         else {
  // //           continue;
  // //         }

  // //       }
  // //       if (c) {
  // // continue;
  // //       }
  // //       else {
  // // this.des.push(data[i])
  // //       }
  // //     }
  //   }





  constructor(private http: HttpClient, private myservice: MyserviceService) {

  }
}

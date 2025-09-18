import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { NetworkCallServiceService } from 'src/app/service/network-call-service.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  allStudents: Student[] = [];

  constructor(private ar: ActivatedRoute, private serviceCall: NetworkCallServiceService) { }
  ngOnInit(): void {
    
    this.serviceCall.viewAll().subscribe((allData: Student[]) => {
      this.allStudents = allData;
    })
  }



}

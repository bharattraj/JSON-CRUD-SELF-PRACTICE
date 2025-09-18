import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/student';
import { NetworkCallServiceService } from 'src/app/service/network-call-service.service';

@Component({
  selector: 'app-view-by-id',
  templateUrl: './view-by-id.component.html',
  styleUrls: ['./view-by-id.component.css']
})



export class ViewByIdComponent implements OnInit {
  st!: Student | undefined;
  constructor(private serviceCall: NetworkCallServiceService, private ar: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.ar.snapshot.paramMap.get('id');
    this.serviceCall.viewById(id).subscribe((data) => {
      console.log(data);
      this.st = data;
    });
}


}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/model/student';
import { NetworkCallServiceService } from 'src/app/service/network-call-service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  formG!: FormGroup;
  constructor(private serviceCall: NetworkCallServiceService, private fb: FormBuilder) {
    this.formG = this.fb.group({
      studentName: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/)]],
      mobile: ["", [Validators.required, Validators.pattern(/^[6-9][0-9]{9}$/)]],
      email: ["", [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      dateOfBirth: ["", [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]]
    })
  }
  addStudentInfo() {
    if (this.formG.valid) {
      this.serviceCall.addStudent(this.formG.value).subscribe((data) => {
        alert("Successfully Added new Student!");
      })
    }
  }
}


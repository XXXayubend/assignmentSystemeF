import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service'

@Component({
  selector: 'app-assignment',
  standalone: false,
  templateUrl: './assignment.html',
  styleUrl: './assignment.css',
})
export class Assignment {
  assignmentResult:Map<String,String>= new Map()

  constructor(
    private studentService:StudentService
  ){}
  ngOnInit(): void {
    this.getAssignmentResult()
  }

  getAssignmentResult(){
    this.studentService.getStudentAssignment().subscribe(
      data=>{
        this.assignmentResult=data
      }
    )
  }
}

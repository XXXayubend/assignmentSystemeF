import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  standalone: false,
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList {
  constructor(private studentService: StudentService) {}
  students:Student[] = []
  maxProjectsPerStudent:any
  tempNumber:any
  ngOnInit() : void{
    this.getAllStudents()
    this.getMaxProjectPerStudent()
  }
  getAllStudents() {
    this.studentService.getAllStudent().subscribe(
      data=>{
        this.students=data
      }
    )
  }
  deleteStudent(id:any){
    this.studentService.deleteStudent(id).subscribe(
      data=>{
        this.getAllStudents()
      }
    )
  }
  getMaxProjectPerStudent(){
    this.studentService.getMaxProjectsPerStudent().subscribe(
      data=>{
        this.maxProjectsPerStudent=data
      }
    )
  }
  updateMaxProjectsPerStudent(){
    this.studentService.updateMaxProjectsPerStudent(this.tempNumber).subscribe(
      data=>{
        this.maxProjectsPerStudent=data
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Project } from '../project'
import { StudentService } from '../student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-projects',
  standalone: false,
  templateUrl: './student-projects.html',
  styleUrl: './student-projects.css',
})
export class StudentProjects {
  student:Student=new Student("",0,[])
  availableProjects:Project[]=[]
  projectId:any

  constructor(
    private studentService:StudentService,
    private activateRout: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.student.id=this.activateRout.snapshot.params["id"]
    this.refreshPage()
  }
  getStudentById(){
    this.studentService.getStudentById(Number(this.student.id)).subscribe(
      data=>{
        this.student=data
      }
    )
  }
  getStudentAvailableProject(){
    this.studentService.getAvailableStudentProjects(this.student.id).subscribe(
      data=>{
        this.availableProjects=data
      }
    )
  }
  refreshPage(){
    this.getStudentById()
    this.getStudentAvailableProject()
  }

  addProject(){
    this.studentService.addProjectToStudent(this.student.id,this.projectId).subscribe(
      data=>{
        this.refreshPage()
      }
    )
  }

  deleteProject(project_id:any){
    this.studentService.deleteProjectFromStudent(this.student.id,project_id).subscribe(
      data=>{
        this.refreshPage()
      }
    )
  }
}

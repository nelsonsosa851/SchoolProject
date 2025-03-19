import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
    selector: 'app-schoolproject',
    templateUrl: './schoolproject.component.html',
    styleUrls: ['./schoolproject.component.css']
})
export class SchoolProjectComponent implements OnInit {
  public students: Observable<any>;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getStudents();
  }
  getStudents() {
    this.students = this.http.get('https://api.example.com/students');
  }
}
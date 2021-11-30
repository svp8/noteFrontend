import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpService, private formBuilder: FormBuilder,private router:Router) { }

  subForm = this.formBuilder.group({
    header: '',
    text: ''
  });
  ngOnInit(): void {
  }
  onSumbit() {
    this.subForm.reset();
    this.router.navigateByUrl("/home");
  }
}

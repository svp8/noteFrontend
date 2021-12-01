import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private http: HttpService, private formBuilder: FormBuilder, private router: Router) { }
// Форма с полями заметки
  subForm = this.formBuilder.group({
    header: [''],
    text: ''
  });
  ngOnInit(): void {
  }
  // Создаем заметку
  onSumbit() {

    if (this.subForm.get("header")?.value) {
      this.http.postNote(this.subForm.get("header")!.value, this.subForm.get("text")?.value).subscribe((resp: any) => {
// Если создалась, возвращаемся на главную
        if (resp != null) {
          console.log(resp);
          this.router.navigateByUrl("/home");
          this.subForm.reset();
        }
      });

    };

  }
}

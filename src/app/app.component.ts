import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormArray ,FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get alternativeEmails(){
    return this.registrationForm.get('alternativeEmails') as FormArray;
  } 

  constructor(private fb:FormBuilder){}

  registrationForm=this.fb.group({
    email:[''],
    alternativeEmails: this.fb.array([])
  })

  addAlternativeEmail(){
    this.alternativeEmails.push(this.fb.control(''));
  }

  onSubmit(values:any){
    console.log(values.value);
  }



}

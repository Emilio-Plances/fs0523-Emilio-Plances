import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  form!:FormGroup;

  genres:string[] = [
    'uomo',
    'donna',
    'altro'
  ];

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.form = this.fb.group({
      name: this.fb.control(null,[Validators.required]),
      surname: this.fb.control(null,[Validators.required]),
      authData: this.fb.group({
        username: this.fb.control(null,[Validators.required]),
        password: this.fb.control(null,[Validators.required]),
        confirmPassword: this.fb.control(null,[Validators.required, this.passwordMatchValidator])
      }),
      genre: this.fb.control(null,[Validators.required]),
      profileImg: this.fb.control(null,[Validators.required]),
      bio: this.fb.control(null,[Validators.required])
    })
  }

  submit(){
    console.log(this.form);
    console.log(this.form.value);
  }

  isValid(nameForm:string):boolean|undefined{
    return this.form.get(nameForm)?.valid
  }

  isTouched(nameForm:string):boolean|undefined{
    return this.form.get(nameForm)?.touched
  }

  isValidAndTouched(nameForm:string):boolean|undefined{
    return !this.isValid(nameForm) && this.isTouched(nameForm)
  }

  passwordMatchValidator=(formC:FormControl):ValidationErrors|null => {
    if(formC.value!=this.form?.get(`authData.password`)?.value){
      return {
        invalid: true,
        message: 'Le password sono diverse!!'
      }
    }
    return null;
  }

  getCustomMessage(nameForm:string){
    return this.form.get(nameForm)?.errors!['message']
  }
}

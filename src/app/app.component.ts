import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { MovieService } from './movie.service';
import { Imovie } from './imovie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public listmovie: Imovie[] = [];
  firstName: string= '';
  lastName: string= '';
  myname:String = 'teen';
  isDisabled:boolean = false;
  showButton:boolean = true;
  point:number = 0;
  options:String = '';
  books:any[] = [
    {title: "Moby Dick" , author : "Moby"}
    ,{title:   "Mob" , author : "Mob"}
    ,{title: "Mobick" , author : "Mobick"}
  ];
  id: string = "";
  confirm(){
    console.log(this.firstName);
  }
  switch (param:boolean) {
    this.showButton =param;
  }
  constructor(private formBuilder: FormBuilder){}
  
    addressForm = this.formBuilder.group({
    address:[{value: null, disabled: false },Validators.required],
    tel:[{value: null, disabled: false },Validators.required],
    name:[{value: null, disabled: false },Validators.required],
    postCode:[{value: null, disabled: false },Validators.required]
  });
}

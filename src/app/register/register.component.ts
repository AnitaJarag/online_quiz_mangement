import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Register } from '../models/register';
import { RegisterService } from '../service/register.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
reg:Register=new Register();
ngOnInit(): void {
  
}
constructor(private regServ:RegisterService)
{

}
submitdata(frm:any)
{
  if(frm.valid)
    {
  this.regServ.newUser(this.reg).subscribe((data:Register) =>{
    if(data!=null)
      {
        alert('Register successful')
      }
  })
}
}
}

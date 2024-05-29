import { Component } from '@angular/core';
import { AdminLogin } from '../models/admin-login';
import{AdminService} from '../service/admin.service';
import { Route, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
ad:AdminLogin=new AdminLogin();
constructor(private adServ:AdminService,private router:Router)
{

}
submitdata()
{
  this.adServ.login(this.ad).subscribe((data:AdminLogin)=>{
if(data!=null)
  {
  localStorage.setItem('aemailid',data.emailid)
  alert("login successfull")
  this.router.navigate(['/']);
  }
  else
  alert("Invalid email and password")
  })
}
}

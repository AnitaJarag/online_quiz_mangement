import { Component, OnInit } from '@angular/core';
import { Addmcq } from '../models/addmcq';
import { AddmcqService } from '../service/addmcq.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-addmcq',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './addmcq.component.html',
  styleUrl: './addmcq.component.css'
})
export class AddmcqComponent implements OnInit {
  add:Addmcq=new Addmcq();
  
  constructor(private addServ:AddmcqService){}
  ngOnInit(): void {}
submitdata()
{
  alert(JSON.stringify(this.add))
  this.addServ.newAddmcq(this.add).subscribe((data:Addmcq) =>{
    if(data!=null)
      {
        
        alert('Quiz submit successfully'+JSON.stringify(data))
      }
  });
}
}

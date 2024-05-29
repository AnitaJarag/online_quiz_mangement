import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Addmcq } from '../models/addmcq';
import { AddmcqService } from '../service/addmcq.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-html',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './html.component.html',
  styleUrl: './html.component.css'
})
export class HtmlComponent implements OnInit{
  que:Addmcq[]=[];
  uq:String[]=[]
  marks:number=0
  lang:string="Html"
  ngOnInit(): void {
    this.lang=this.route.snapshot.params["lang"]
    this.getQuiz(this.lang)
  }
  constructor(private qServ:AddmcqService,private route:ActivatedRoute)
  {
  
  }
  submitdata(){
    let x:number=0
for(x=0;x<this.uq.length;x++)
  {
    if(this.uq[x]==this.que[x].ans)
      {
        this.marks++;
      }

  }
  alert("Obtained Marks="+this.marks)
  }
  getQuiz(lang:string)
  {
  this.qServ.getAllLang(lang).subscribe((data: Addmcq[])=>{
      if(data!=null)
        {
         this.que =data;
      }
    });
  }
}  
  


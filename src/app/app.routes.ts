import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { QuizComponent } from './quiz/quiz.component';
import { HtmlComponent } from './html/html.component';
import { Feedback } from './models/feedback';
import { FeedbackComponent } from './feedback/feedback.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewFeedbackComponent } from './view-feedback/view-feedback.component';
import { ViewRegisterComponent } from './view-register/view-register.component';
import { StudyComponent } from './study/study.component';
import { AddmcqComponent } from './addmcq/addmcq.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'reg',component:RegisterComponent},
    {path:'log',component:LoginComponent},
    {path:'nav',component:NavbarComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'quiz',component:QuizComponent},
    {path:'html/:lang',component:HtmlComponent},
    {path:'feedback',component:FeedbackComponent},
    {path:'alog',component:AdminLoginComponent},
    {path:'viewfeedback',component:ViewFeedbackComponent},
    {path:'viewregister',component:ViewRegisterComponent},
    {path:'study',component:StudyComponent},
    {path:'addmcq',component:AddmcqComponent},
    
];

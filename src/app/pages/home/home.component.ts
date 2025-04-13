import { Component, type OnInit } from "@angular/core"
import { DataService } from "../../services/data.service"
import {HobbiesComponent} from '../../components/hobbies/hobbies.component';
import {EducationComponent} from '../../components/education/education.component';
import {ReferencesComponent} from '../../components/references/references.component';
import {JobExperienceComponent} from '../../components/job-experience/job-experience.component';
import {SkillsComponent} from '../../components/skills/skills.component';
import {HeaderComponent} from '../../components/header/header.component';
import {AlertComponent} from '../../components/shared/alert/alert.component';
import {NgIf} from '@angular/common';
import {LoadingSpinnerComponent} from '../../components/shared/loading-spinner/loading-spinner.component';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  imports: [
    HobbiesComponent,
    EducationComponent,
    ReferencesComponent,
    JobExperienceComponent,
    SkillsComponent,
    HeaderComponent,
    AlertComponent,
    NgIf,
    LoadingSpinnerComponent
  ],
  standalone: true
})
export class HomeComponent implements OnInit {
  userData: any = {}
  loading = true
  error: string | null = null

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUserData().subscribe({
      next: (data) => {
        this.userData = data
        this.loading = false
      },
      error: (err) => {
        this.error = "Failed to load user data. Please try again later."
        this.loading = false
        console.error("Error loading user data:", err)
      },
    })
  }
}

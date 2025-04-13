import { Component } from "@angular/core"
import {SectionTitleComponent} from '../shared/section-title/section-title.component';
import {ToggleService} from "../../services/toggle.service";
import {NgClass} from "@angular/common";

@Component({
  selector: "app-job-experience",
  templateUrl: "./job-experience.component.html",
  styleUrls: ["./job-experience.component.scss"],
  imports: [
    SectionTitleComponent,
    NgClass
  ],
  standalone: true
})
export class JobExperienceComponent {
  constructor(public toggleService: ToggleService) {}

  toggleSection(sectionId: string): void {
    this.toggleService.toggleSection(sectionId)
  }
}

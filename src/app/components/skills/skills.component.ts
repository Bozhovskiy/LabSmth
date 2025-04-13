import { Component } from "@angular/core"
import {SectionTitleComponent} from '../shared/section-title/section-title.component';
import {NgClass, NgForOf} from '@angular/common';
import { ToggleService } from "../../services/toggle.service"

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  imports: [
    SectionTitleComponent,
    NgForOf,
    NgClass
  ],
  standalone: true
})
export class SkillsComponent {
  skills = [
    { name: "Microsoft Word", value: 75 },
    { name: "Adobe Illustrator", value: 90 },
    { name: "Microsoft Powerpoint", value: 80 },
    { name: "Adobe Photoshop", value: 85 },
  ]
  constructor(public toggleService: ToggleService) {}

  toggleSection(sectionId: string): void {
    this.toggleService.toggleSection(sectionId)
  }
}

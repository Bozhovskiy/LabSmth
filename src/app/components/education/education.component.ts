import { Component } from "@angular/core"
import {NgClass, NgForOf} from '@angular/common';
import {ToggleService} from "../../services/toggle.service";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
  imports: [
    NgClass,
    NgForOf
  ],
  standalone: true
})

export class EducationComponent {
  education = [
    {
      title: "Master of Creative Arts",
      institution: "University name",
      period: "2018 - present",
      description: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore",
    },
    {
      title: "Master Graphic & Web Designer",
      institution: "University name",
      period: "2015 - 2017",
      description: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore",
    },
    {
      title: "Master of Design",
      institution: "University name",
      period: "2010 - 2012",
      description: "Lorem ipsum dolor sit amet, consectetur incididunt ut labore",
    },
  ]

  constructor(public toggleService: ToggleService) {}

  toggleSection(sectionId: string): void {
    this.toggleService.toggleSection(sectionId)
  }
}

import { Component, Input } from "@angular/core"
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {ToggleService} from "../../services/toggle.service";

@Component({
  selector: "app-hobbies",
  templateUrl: "./hobbies.component.html",
  styleUrls: ["./hobbies.component.scss"],
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  standalone: true
})
export class HobbiesComponent {
  @Input() hobbies: string[] = []

  constructor(public toggleService: ToggleService) {}

  toggleSection(sectionId: string): void {
    this.toggleService.toggleSection(sectionId)
  }
}

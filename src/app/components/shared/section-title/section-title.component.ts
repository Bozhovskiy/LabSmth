import { Component, Input, Output, EventEmitter } from "@angular/core"
import {NgIf, NgSwitch, NgSwitchCase} from '@angular/common';

@Component({
  selector: "app-section-title",
  templateUrl: "./section-title.component.html",
  styleUrls: ["./section-title.component.scss"],
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgIf
  ],
  standalone: true
})
export class SectionTitleComponent {
  @Input() title = ""
  @Input() icon = ""
  @Input() iconColor = "#444444"
  @Input() titleClass = ""
  @Input() sectionId = ""

  @Output() toggleEvent = new EventEmitter<string>()

  toggleSection(): void {
    this.toggleEvent.emit(this.sectionId)
  }
}

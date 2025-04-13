import { Component, Input } from "@angular/core"
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: "app-loading-spinner",
  templateUrl: "./loading-spinner.component.html",
  styleUrls: ["./loading-spinner.component.scss"],
  imports: [
    NgClass,
    NgIf
  ],
  standalone: true
})
export class LoadingSpinnerComponent {
  @Input() size: "small" | "medium" | "large" = "medium"
  @Input() message = "Loading..."
}

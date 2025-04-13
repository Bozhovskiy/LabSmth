import { Component, Input, type OnInit } from "@angular/core"
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"],
  imports: [
    NgClass,
    NgIf
  ],
  standalone: true
})
export class AlertComponent implements OnInit {
  @Input() message = ""
  @Input() type: "success" | "info" | "warning" | "danger" = "info"
  @Input() dismissible = true
  @Input() autoDismiss = false
  @Input() dismissTimeout = 5000

  visible = true

  ngOnInit(): void {
    if (this.autoDismiss) {
      setTimeout(() => {
        this.dismiss()
      }, this.dismissTimeout)
    }
  }

  dismiss(): void {
    this.visible = false
  }
}

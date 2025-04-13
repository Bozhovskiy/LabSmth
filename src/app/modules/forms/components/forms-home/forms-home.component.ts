import { Component } from "@angular/core"
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: "app-forms-home",
  templateUrl: "./forms-home.component.html",
  styleUrls: ["./forms-home.component.scss"],
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  standalone: true
})
export class FormsHomeComponent {}

import { Component } from "@angular/core"
import {RouterLink} from '@angular/router';

@Component({
  selector: "app-not-found",
  templateUrl: "./not-found.component.html",
  styleUrls: ["./not-found.component.scss"],
  imports: [
    RouterLink
  ],
  standalone: true
})
export class NotFoundComponent {}

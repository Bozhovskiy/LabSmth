import { Component, type OnInit } from "@angular/core"
import { DataService } from "./services/data.service"
import {FooterComponent} from './components/shared/footer/footer.component';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/shared/navbar/navbar.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [
    FooterComponent,
    RouterOutlet,
    NavbarComponent
  ],
  standalone: true
})
export class AppComponent implements OnInit {
  title = "Angular CV"
  userData: any = {
    name: "",
    surname: "",
    hobbies: [],
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUserData().subscribe({
      next: (data) => {
        this.userData = data
      },
      error: (err) => {
        console.error("Error loading user data:", err)
      },
    })
  }
}

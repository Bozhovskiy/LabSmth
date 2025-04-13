import { Component, Input } from "@angular/core"
import {NgClass, NgOptimizedImage} from "@angular/common";
import {ToggleService} from "../../services/toggle.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"],
    imports: [
        NgOptimizedImage,
        NgClass
    ],
    standalone: true
})
export class HeaderComponent {
    @Input() name = ""
    @Input() surname = ""

    constructor(public toggleService: ToggleService) {}

    toggleSection(sectionId: string): void {
        this.toggleService.toggleSection(sectionId)
    }
}

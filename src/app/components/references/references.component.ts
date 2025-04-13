import { Component } from "@angular/core"
import {NgClass, NgForOf} from "@angular/common";
import { ToggleService } from "../../services/toggle.service"
@Component({
    selector: "app-references",
    templateUrl: "./references.component.html",
    styleUrls: ["./references.component.scss"],
    imports: [
        NgForOf,
        NgClass
    ],
    standalone: true
})
export class ReferencesComponent {
    references = [
        { name: "Michael R. Magee", address: "4418 Bobcat Drive Southfield, MI 48034" },
        { name: "Travis M. Godinez", address: "2755 Oakmound Drive Chicago, IL 60605" },
    ]

    constructor(public toggleService: ToggleService) {}

    toggleSection(sectionId: string): void {
        this.toggleService.toggleSection(sectionId)
    }
}

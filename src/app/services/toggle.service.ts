import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root",
})
export class ToggleService {
  // Store the collapsed state of each section
  private collapsedSections: { [key: string]: boolean } = {}

  constructor() {}

  // Toggle a section's collapsed state
  toggleSection(sectionId: string): boolean {
    this.collapsedSections[sectionId] = !this.collapsedSections[sectionId]
    return this.collapsedSections[sectionId]
  }

  // Check if a section is collapsed
  isCollapsed(sectionId: string): boolean {
    return this.collapsedSections[sectionId] || false
  }
}

import { Component, type OnInit } from "@angular/core"
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { AdminService } from "../../services/admin.service"
import {NgClass, NgIf} from '@angular/common';
import {LoadingSpinnerComponent} from '../../../../components/shared/loading-spinner/loading-spinner.component';
import {AlertComponent} from '../../../../components/shared/alert/alert.component';

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"],
  imports: [
    NgClass,
    NgIf,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  standalone: true
})
export class SettingsComponent implements OnInit {
  settingsForm!: FormGroup
  loading = true
  saving = false
  error: string | null = null
  success: string | null = null

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
  ) {}

  ngOnInit(): void {
    this.initForm()
    this.loadSettings()
  }

  initForm(): void {
    this.settingsForm = this.fb.group({
      siteName: ["", Validators.required],
      siteDescription: ["", Validators.required],
      contactEmail: ["", [Validators.required, Validators.email]],
      enableRegistration: [true],
      maintenanceMode: [false],
    })
  }

  loadSettings(): void {
    this.loading = true
    this.error = null

    this.adminService.getSettings().subscribe({
      next: (settings) => {
        this.settingsForm.patchValue(settings)
        this.loading = false
      },
      error: (err) => {
        this.error = "Failed to load settings. Please try again."
        this.loading = false
        console.error("Error loading settings:", err)
      },
    })
  }

  onSubmit(): void {
    if (this.settingsForm.invalid) {
      return
    }

    this.saving = true
    this.error = null
    this.success = null

    this.adminService.updateSettings(this.settingsForm.value).subscribe({
      next: () => {
        this.success = "Settings updated successfully!"
        this.saving = false
      },
      error: (err) => {
        this.error = "Failed to update settings. Please try again."
        this.saving = false
        console.error("Error updating settings:", err)
      },
    })
  }
}

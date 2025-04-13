import { Component, type OnInit } from "@angular/core"
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms"
import { AuthService } from "../../services/auth.service"
import { UserService } from "../../services/user.service"
import {NgClass, NgIf} from '@angular/common';
import {LoadingSpinnerComponent} from '../../components/shared/loading-spinner/loading-spinner.component';
import {AlertComponent} from '../../components/shared/alert/alert.component';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
  imports: [
    NgClass,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    AlertComponent,
    NgIf
  ],
  standalone: true
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup
  user: any = null
  loading = true
  updating = false
  error: string | null = null
  success: string | null = null

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.initForm()
    this.loadUserProfile()
  }

  initForm(): void {
    this.profileForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      email: [{ value: "", disabled: true }],
      bio: ["", [Validators.maxLength(500)]],
      phone: ["", [Validators.pattern(/^\+?[0-9\s\-$$]+$/)]],
      address: [""],
    })
  }

  loadUserProfile(): void {
    this.loading = true
    this.error = null

    this.userService.getUserProfile().subscribe({
      next: (user) => {
        this.user = user
        this.profileForm.patchValue({
          name: user.name,
          email: user.email,
          bio: user.bio || "",
          phone: user.phone || "",
          address: user.address || "",
        })
        this.loading = false
      },
      error: (err) => {
        this.error = "Failed to load profile data. Please try again."
        this.loading = false
        console.error("Error loading profile:", err)
      },
    })
  }

  onSubmit(): void {
    if (this.profileForm.invalid) {
      return
    }

    this.updating = true
    this.error = null
    this.success = null

    const updatedProfile = {
      ...this.profileForm.getRawValue(),
      email: this.user.email, // Include email since it's disabled in the form
    }

    this.userService.updateUserProfile(updatedProfile).subscribe({
      next: () => {
        this.success = "Profile updated successfully!"
        this.updating = false
      },
      error: (err) => {
        this.error = err.message || "Failed to update profile. Please try again."
        this.updating = false
      },
    })
  }
}

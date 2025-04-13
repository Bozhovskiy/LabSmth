import { Routes } from "@angular/router"
import { AuthGuard } from "./guards/auth.guard"
import { HomeComponent } from "./pages/home/home.component"
import { LoginComponent } from "./pages/auth/login/login.component"
import { ProfileComponent } from "./pages/profile/profile.component"
import { NotFoundComponent } from "./pages/not-found/not-found.component"

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: "forms",
    loadChildren: () =>
        import("./modules/forms/forms.routes").then((m) => m.routes), // 🆕 standalone route definition
  },
  {
    path: "admin",
    loadChildren: () =>
        import("./modules/admin/admin.routes").then((m) => m.routes),
    canLoad: [AuthGuard],
  },
  { path: "**", component: NotFoundComponent },
]

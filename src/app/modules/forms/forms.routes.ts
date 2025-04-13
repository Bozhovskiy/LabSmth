import { Routes } from "@angular/router"
import { FormsHomeComponent } from "./components/forms-home/forms-home.component"
import { TemplateDrivenFormComponent } from "./components/template-driven-form/template-driven-form.component"
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component"

export const routes: Routes = [
  {
    path: "",
    component: FormsHomeComponent,
    children: [
      { path: "", redirectTo: "template-driven", pathMatch: "full" },
      { path: "template-driven", component: TemplateDrivenFormComponent },
      { path: "reactive", component: ReactiveFormComponent },
    ],
  },
]

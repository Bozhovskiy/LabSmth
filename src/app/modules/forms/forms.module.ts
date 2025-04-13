import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule as NgFormsModule, ReactiveFormsModule } from "@angular/forms"
import { FormsRoutingModule } from "./forms-routing.module"
import { FormsHomeComponent } from "./components/forms-home/forms-home.component"
import { TemplateDrivenFormComponent } from "./components/template-driven-form/template-driven-form.component"
import { ReactiveFormComponent } from "./components/reactive-form/reactive-form.component"

@NgModule({
  declarations: [],
  imports: [CommonModule, NgFormsModule, ReactiveFormsModule, FormsRoutingModule,FormsHomeComponent, TemplateDrivenFormComponent, ReactiveFormComponent],
})
export class FormsModule {}

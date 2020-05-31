import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ConfigbodyComponent } from "./configbody/configbody.component";

const routes: Routes = [
  { path: "confighome", component: AppComponent },
  { path: "", redirectTo: "/config", pathMatch: "full" },
  { path: "config", component: ConfigbodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

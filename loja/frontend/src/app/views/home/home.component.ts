import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/components/login/auth.service";
import { HeaderService } from "./../../components/template/header/header.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(
    private headerService: HeaderService,
    private authService: AuthService
  ) {
    headerService.headerData = {
      title: "Início",
      icon: "home",
      icon2: "logout",
      routeUrl: "",
    };
  }

  ngOnInit(): void {}
}

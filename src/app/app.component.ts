import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from "./components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PerfilComponent, HeaderComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-projeto-angular';
}

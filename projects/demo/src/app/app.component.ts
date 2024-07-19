import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxScratchComponent } from 'ngx-scratch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxScratchComponent],
  template: ` <main class="main">
    <div class="content">hello world</div>
    <lib-ngx-scratch></lib-ngx-scratch>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
}

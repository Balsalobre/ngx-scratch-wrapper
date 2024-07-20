import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxScratchComponent } from 'ngx-scratch';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxScratchComponent],
  template: ` <main class="main">
    <h1>{{ title }}</h1>
    <ngx-scratch></ngx-scratch>
  </main>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'OLE SCRATCH INTEGRATION';
}

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'ngx-scratch',
  standalone: true,
  imports: [HttpClientModule],
  template: `<p>ngx-scratch works!!</p>
  <iframe src="assets/scratch-gui/index.html" width="100%" height="100%"></iframe>
  <img src="assets/scratch-gui/static/assets/add-backdrop.3d71dd48613895c4ed9d.jpg" alt="blocks" />
  `,
})
export class NgxScratchComponent {
  // private readonly httpClient = inject(HttpClient);

  // constructor() {
  //   this.loadHtml('assets/scratch-gui/index.html').then((html) => {
  //     console.log(html);
  //   });
  // }

  // loadHtml(filePath: string): Promise<string> {
  //   return lastValueFrom(
  //     this.httpClient.get(filePath, { responseType: 'text' }),
  //   );
  // }
}

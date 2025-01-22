import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err))
  .then(() => {
    const loader = document.getElementById('app-loader');
    if (loader) {
      loader.classList.add('hidden');
    }
  });
// .catch((err) => console.error(err))
// .then(() => {
//   // Simulate a delay (3 seconds) to show the splash screen
//   setTimeout(() => {
//     const loader = document.getElementById('app-loader');
//     if (loader) {
//       loader.classList.add('hidden'); // Hide the splash screen after 3 seconds
//     }
//   }, 3000);
// });

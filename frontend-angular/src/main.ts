import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

// Agrega `provideHttpClient()` dentro de la configuración de `bootstrapApplication`
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers, // Si ya tienes otras configuraciones en appConfig
    provideHttpClient() // Aquí se proporciona HttpClient
  ]
})
  .catch((err) => console.error(err));

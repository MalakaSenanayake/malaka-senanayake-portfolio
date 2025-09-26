import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * Expose any global providers for bootstrap. Kept minimal.
 */
export const appProviders = [
  importProvidersFrom(BrowserAnimationsModule)
];

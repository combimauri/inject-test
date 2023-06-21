import { HttpClient } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';

export const HTTP = new InjectionToken('', {
  providedIn: 'root',
  factory: () => inject(HttpClient),
});

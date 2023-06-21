import { inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export const getRouteParam = (key: string) =>
  inject(ActivatedRoute).snapshot.params[key];

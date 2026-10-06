import { ResolveFn } from '@angular/router';
import { IProject } from '../models';
import { ProjectApi } from '../services/project-api';
import { inject } from '@angular/core';

export const projectResolver: ResolveFn<IProject> = (route) => {
  const projectApi = inject(ProjectApi);
  const projectId = route.paramMap.get('projectId')!;

  console.log('Route: ', route);

  return projectApi.getById(projectId);
};

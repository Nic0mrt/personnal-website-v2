import { safeGet } from '../services';

const API_ENDPOINTS = {
  projects: 'projets',
};

export class ProjectsService {
  constructor() {
    this.url = 'http://localhost:1337/';
  }

  getProjects = async () => {
    return await safeGet(this.url + API_ENDPOINTS.projects);
  };
}
export default ProjectsService;

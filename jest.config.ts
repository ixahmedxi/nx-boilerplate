import { getJestProjects } from '@nrwl/jest';
import { Config } from 'jest';

const config: Config = {
  projects: getJestProjects(),
};

export default config;

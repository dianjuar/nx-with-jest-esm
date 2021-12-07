// Changing to use ESM not CommonJS
/* const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: getJestProjects(),
};
*/

import { getJestProjects } from '@nrwl/jest'

export default {
  projects: getJestProjects(),
};
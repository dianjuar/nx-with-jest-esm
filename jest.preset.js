// Changing to use ESM not CommonJS
/* const nxPreset = require('@nrwl/jest/preset');

module.exports = { ...nxPreset };
 */

import * as nxPreset from '@nrwl/jest/preset/index.js'

export default {...nxPreset}
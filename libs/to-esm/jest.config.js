const config = {
  displayName: 'to-esm',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
      useESM: true,
    },
  },
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/to-esm',
  extensionsToTreatAsEsm: ['.ts'], // Step 4
};

// module.exports = config;

// Changing to use ESM not CommonJS
export default config;

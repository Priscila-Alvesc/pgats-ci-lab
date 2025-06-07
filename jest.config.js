// c:/Users/alves/Desktop/pgats-ci-lab/jest.config.js
export default {
  // Set the test environment to jsdom
  testEnvironment: 'jsdom',

  // Point to your setup file
  // <rootDir> is a Jest token that refers to the project root directory
  setupFilesAfterEnv: ['<rootDir>/test/setup.js'],

  // This is crucial: tells Jest to treat .js (and .ts) files as ES modules
  extensionsToTreatAsEsm: ['.ts'],

  // Configure transformers
  transform: {
    // Use ts-jest to transform .ts, .tsx, .js, and .jsx files
    '^.+\\.(ts|tsx|js|jsx)$': [
      'ts-jest',
      {
        useESM: true, // Enable ESM support in ts-jest
        tsconfig: 'jsconfig.json', // Point to your jsconfig.json for compiler options
      },
    ],
  },

  // Helps Jest resolve imports that might omit .js extensions in an ESM context
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },

  // Ignore paths for module resolution and tests
  modulePathIgnorePatterns: [
    '<rootDir>/.stryker-tmp',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/e2e/',
    '<rootDir>/.stryker-tmp/',
  ],
};
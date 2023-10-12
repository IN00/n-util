// https://kulshekhar.github.io/ts-jest/docs/next/guides/esm-support/
import type { JestConfigWithTsJest } from 'ts-jest'

const config: JestConfigWithTsJest = {
  // The directory where Jest should store its cached dependency information
  // cacheDirectory: "/private/var/folders/wc/n40yp7k12pd3lmmdbmxw7gc80000gn/T/jest_dx",

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",
  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>/test"
  ],
  // The glob patterns Jest uses to detect test files
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
    "**/test/**/*.[jt]s?(x)",
  ],
  // https://kulshekhar.github.io/ts-jest/docs/next/guides/esm-support/
  extensionsToTreatAsEsm: ['.ts'],
  moduleNameMapper: {
    // '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    // '^.+\\.tsx?$': [
    //   'ts-jest',
    //   {
    //     useESM: true,
    //   },
    // ],
  },
  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],
};

export default config;

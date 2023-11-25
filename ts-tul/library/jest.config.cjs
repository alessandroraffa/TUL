module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts', '!**/*.d.ts'],
  coverageDirectory: './coverage/unit',
  coverageReporters: ['text', 'lcov'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  testRegex: '(/__tests__/__unit__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};

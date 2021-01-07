module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/*.{js,jsx}',
    '!<rootDir>/src/index.js'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}

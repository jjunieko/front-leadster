// jest.config.js
module.exports = async () => {
  return {
    verbose: true,
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    setupFilesAfterEnv: ['@testing-library/react'],
    preset: 'ts-jest',
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  }
};
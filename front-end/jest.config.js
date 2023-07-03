// jest.config.js
module.exports = async () => {
  return {

    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    setupFilesAfterEnv: ['@testing-library/react'],
    preset: 'ts-jest',
  }

};
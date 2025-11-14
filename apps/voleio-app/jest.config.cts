const nextJest = require('next/jest.js');

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  displayName: '@connect-people/connect-people',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/connect-people',
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(config);

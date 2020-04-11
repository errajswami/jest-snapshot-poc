const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, './'),

  moduleFileExtensions: [
    'js',
    'vue',
    'html'
  ],

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.vue$': '<rootDir>/node_modules/vue-jest',
  },

  testPathIgnorePatterns: [
    "<rootDir>/node_modules/"
  ],

  // testMatch: [
  //   '<rootDir>/(test/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))'
  // ]
  modulePaths: [
    "<rootDir>"
  ],

  preset: '@vue/cli-plugin-unit-jest'
}

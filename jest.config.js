module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.svg': '<rootDir>/svgMock.tsx',
    '.(css|less|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.svg$': '<rootDir>/svgTransform.js',
  },
}

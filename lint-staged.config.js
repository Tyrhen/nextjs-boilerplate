module.exports = {
  './**/*.{js,jsx,ts,tsx}': ['npm run lint:fix'],
  '*': ['prettier --write'],
};

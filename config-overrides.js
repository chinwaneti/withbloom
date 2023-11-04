// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
  // Add resolve.fallback to your Webpack configuration
  config.resolve.fallback = {
    "path": require.resolve("path-browserify")
  };
  
  return config;
};

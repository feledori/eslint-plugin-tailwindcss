/**
 * @fileoverview Recommended coniguration for flat style
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 * @author François Massart
 */
'use strict';

const rules = require('./rules');

module.exports = [
  {
    plugins: {
      get tailwindcss() {
        return require('../index');
      },
    },
  },
  {
    rules,
  },
];

'use strict';

module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-order'],
  rules: {
    'no-empty-source': null,
    'order/properties-alphabetical-order': true,
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-variables',
      'declarations',
      {
        type: 'at-rule',
        name: 'media',
      },
      'rules',
    ],
  },
};

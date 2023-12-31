'use strict';

/**
 * test-item service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-item.test-item');

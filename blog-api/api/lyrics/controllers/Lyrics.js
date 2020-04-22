'use strict';

/**
 * Lyrics.js controller
 *
 * @description: A set of functions called "actions" for managing `Lyrics`.
 */

module.exports = {

  /**
   * Retrieve lyrics records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.lyrics.search(ctx.query);
    } else {
      return strapi.services.lyrics.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a lyrics record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.lyrics.fetch(ctx.params);
  },

  /**
   * Count lyrics records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.lyrics.count(ctx.query, populate);
  },

  /**
   * Create a/an lyrics record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.lyrics.add(ctx.request.body);
  },

  /**
   * Update a/an lyrics record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.lyrics.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an lyrics record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.lyrics.remove(ctx.params);
  }
};

"use strict";

module.exports = {
  comments: async (ctx) => {
    const { id } = ctx.params;
    const posts = await strapi.services.posts.findOne({ id });
    return posts.comments;
  },
};

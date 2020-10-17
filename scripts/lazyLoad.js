'use strict';

module.exports.lazyload = function (hexo) {
    if (!hexo.theme.config.lazyload || !hexo.theme.config.lazyload.enable) {
        return;
    }
    if (hexo.theme.config.lazyload.onlypost) {
        hexo.extend.filter.register('after_post_render', require('./lazyProcess').processPost);
    } else {
        hexo.extend.filter.register('after_render:html',  require('./lazyProcess').processSite);
    }
}
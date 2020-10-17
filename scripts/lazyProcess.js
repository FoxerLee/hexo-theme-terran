'use strict';

function lazyProcess(htmlContent)  {
    let loadingImage = this.theme.config.lazyload.loadingImage;
    let className = 'lazyload';
    return htmlContent.replace(/<img([^>]*)src="([^"]*)"([^>]*)>/gim, function (match, attrBegin, src, attrEnd) {
        if (!src || /class="(.*?)"/gi.test(match)) {
          return match;
        }
        return `<img ${attrBegin} class="${className}" data-src="${src}" src="${loadingImage}" ${attrEnd}>`;
    });
}

module.exports.processPost = function(data) {
    data.content = lazyProcess.call(this, data.content);
    return data;
};

module.exports.processSite = function (htmlContent) {
    return lazyProcess.call(this, htmlContent);
};
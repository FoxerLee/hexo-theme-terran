
hexo.on('generateBefore', function () {
    require('./replace').replace(hexo);
    require('./lazyLoad').lazyload(hexo);
  })

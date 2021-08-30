const util = require('hexo-util');
const marked = require('marked');

hexo.extend.filter.register('after_post_render', function(data) {
    data.content =
        util.htmlTag(
            'link',
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: `https://cdn.jsdelivr.net/npm/hexo-bubble-dialogue/src/css/bubble.min.css`
            }) +
        data.content;
    return data;
});
hexo.extend.filter.register('after_post_render', function(data) {
    data.content =
        util.htmlTag(
            'link',
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: `https://cdn.jsdelivr.net/npm/hexo-bubble-dialogue/src/css/enst.min.css`
            }) +
        data.content;
    return data;
});

hexo.extend.tag.register('bubble', function(args, content) {
  var charaName = args[0];
  var parsedContent = marked(content);

  if (args[1] === undefined) {
    return `<div character="${charaName}">${parsedContent}</div>`
  } else {
  return `<div character="${charaName}" ${args[1]}>${parsedContent}</div>`};
}, {ends: true});

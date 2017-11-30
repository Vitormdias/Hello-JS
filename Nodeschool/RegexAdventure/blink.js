const marked = require('marked');

module.exports = (str) => {
    const md = marked(str);

    return md.replace(/@@(.+?)@@/g , '<blink>$1</blink>');
};

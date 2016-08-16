function piratize (text) {
  return text.replace(/\b(superuppaclose)\b/ig, "></div>")
             .replace(/superuppadiv/ig, "<div ");
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = piratize(text[i]);
    }
  }
  return text;
});
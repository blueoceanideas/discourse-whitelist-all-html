function resolveDOI (text) { 
  return text.replace("superuppadiv", "<div ");
}

Discourse.Dialect.postProcessText(function (text) {
  text = [].concat(text);
  for (var i = 0; i < text.length; i++) {
    if (text[i].length > 0 && text[i][0] !== "<") {
      text[i] = resolveDOI(text[i]);
    }
  }
  return text;
});

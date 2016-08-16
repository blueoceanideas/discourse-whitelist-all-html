Discourse.Dialect.on("register", function(event) {
  var dialect = event.dialect;

  dialect.inline["evil trout"] = function(text) {
    return [
             "evil trout".length, 
             [
               'a', 
               {href: "http://eviltrout.com"}, 
               "EVIL TROUT IS AWESOME"
             ] 
           ];
  };
});

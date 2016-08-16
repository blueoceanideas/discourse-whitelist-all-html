export default {
  name: 'alert',
  initialize() {
    alert('alert boxes are annoying!');
  }
};

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

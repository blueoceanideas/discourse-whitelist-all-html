import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api)
{
  api.onPageChange((url, title) => {
        // your code here
  var om570ceb4c51994, om570ceb4c51994_poll = function() {
    var r = 0;
    return function(n, l) {
      clearInterval(r), r = setInterval(n, l)
    }
  }();
  ! function(e, t, n) {
    if (e.getElementById(n)) {
      om570ceb4c51994_poll(function() {
        if (window['om_loaded']) {
          if (!om570ceb4c51994) {
            om570ceb4c51994 = new OptinMonsterApp();
            return om570ceb4c51994.init({
              "s": "17705.570ceb4c51994",
              "staging": 0,
              "dev": 0,
              "beta": 0
            });
          }
        }
      }, 25);
      return;
    }
    var d = false,
      o = e.createElement(t);
    o.id = n, o.src = "//a.optnmnstr.com/app/js/api.min.js", o.onload = o.onreadystatechange = function() {
      if (!d) {
        if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
          try {
            d = om_loaded = true;
            om570ceb4c51994 = new OptinMonsterApp();
            om570ceb4c51994.init({
              "s": "17705.570ceb4c51994",
              "staging": 0,
              "dev": 0,
              "beta": 0
            });
            o.onload = o.onreadystatechange = null;
          } catch (t) {}
        }
      }
    };
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(o)
  }(document, "script", "omapi-script");
    
    console.log('the page changed to: ' + url + ' and title ' + title);
  });
}

export default {
  name: 'dynamic-table',
  initialize: function(container)
  {
    withPluginApi('0.1', api => initializePlugin(api));
  }
};

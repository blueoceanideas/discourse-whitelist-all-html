import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api)
{
  api.onPageChange((url, title) => {
export default {
  name: 'dynamic-table',
  initialize() {
    $(document).ready(function() {
        var elements = document.querySelectorAll(".topic-list .main-link a.title");
        var elements2 = document.querySelectorAll(".badge-wrapper.box span.badge-category");
        var i = 0;
        var a1 = -1, a2 = -1, a3 = -1;
        for(i = 0 ;i < elements2.length ; i++)   //Finding the position of wanted topics
        {
            if (elements2[i].innerHTML == "ورزشی")
            {               if(a1 == -1)
            a1 = i;
            else if (a2 == -1)
            a2 = i;
            else if(a3 == -1)
            a3 = i;
            }
            }
            document.getElementById('dyn1').innerHTML = elements[a1].innerHTML;
            document.getElementById('dyn1').href = elements[a1].href;
            document.getElementById('dyn2').innerHTML = elements[a2].innerHTML;
            document.getElementById('dyn2').href = elements[a2].href;
            document.getElementById('dyn3').innerHTML = elements[a3].innerHTML;
            document.getElementById('dyn3').href = elements[a3].href;
            });

  }
};
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

import { withPluginApi } from 'discourse/lib/plugin-api';

function initializePlugin(api)
{
  api.onPageChange((url, title) => {
  name: 'optin',
  initialize() {
    alert('alert boxes are annoying!');
  }
    console.log('the page changed to: ' + url + ' and title ' + title);
  });
}

export default {
  name: 'optin',
  initialize: function(container)
  {
    withPluginApi('0.1', api => initializePlugin(api));
  }
};

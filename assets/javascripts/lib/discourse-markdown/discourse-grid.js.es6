import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-grid'] = !!siteSettings.grid_enabled;
});

export function setup(helper) {
  helper.whiteList([ 'div.grid-row',
                     'div#om-xddddihwxnstqcdk-holder' ]);
}

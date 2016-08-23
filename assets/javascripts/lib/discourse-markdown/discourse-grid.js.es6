import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-grid'] = !!siteSettings.grid_enabled;
});

export function setup(helper) {
  helper.whiteList([ 'div.grid-row',
                     'div#om-xddddihwxnstqcdk-holder',
                     'div.full centered',
                     'div.centered full',
                     'div.half',
                     'div.half centered',
                     'div.centered half',
                     'div.one-third',
                     'div.one-third centered',
                     'div.centered one-third',
                     'div.two-thirds',
                     'div.two-thirds centered',
                     'div.centered two-thirds',
                     'div.one-quarter',
                     'div.one-quarter centered',
                     'div.centered one-quarter',
                     'div.three-quarters',
                     'div.three-quarters half',
                     'div.centered three-quarters',

                     'figure.grid-row',
                     'figure.full',
                     'figure.full centered',
                     'figure.centered full',
                     'figure.half',
                     'figure.half centered',
                     'figure.centered half',
                     'figure.one-third',
                     'figure.one-third centered',
                     'figure.centered one-third',
                     'figure.two-thirds',
                     'figure.two-thirds centered',
                     'figure.centered two-thirds',
                     'figure.one-quarter',
                     'figure.one-quarter centered',
                     'figure.centered one-quarter',
                     'figure.three-quarters',
                     'figure.three-quarters half',
                     'figure.centered three-quarters' ]);
}

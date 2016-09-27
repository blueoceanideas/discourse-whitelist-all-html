import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-opt-in'] = true;
});

export function setup(helper) {
  helper.whiteList([ 'div[id=om-ul1r4pw8gsveu2q3-holder]' ]);
}

import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features['discourse-opt-in'] = true;
});

export function setup(helper) {
  helper.whiteList([ 'div[id=om-c9tomymotiytwdyn-holder]' ]);
  helper.whiteList([ 'div[id=om-drf1qz5ewl5qyv4h-holder]' ]);
  helper.whiteList([ 'div[id=om-mbdbce2ivjh5kuo8-holder]' ]);
  helper.whiteList([ 'div[id=om-eksxbyhcmv27mhll-holder]' ]);
  helper.whiteList([ 'div[id=om-gbnw3zhxtxdobr8n-holder]' ]);
  helper.whiteList([ 'div[id=om-xef84oadl7bl8gu2-holder]' ]);
  helper.whiteList([ 'div[id=om-q0kgcjhdip9latkf-holder]' ]);
  helper.whiteList([ 'div[id=om-g5r94fu0pe5pjnos-holder]' ]);
  helper.whiteList([ 'div[id=om-ul1r4pw8gsveu2q3-holder]' ]);
  helper.whiteList([ 'div[id=om-azfverrig8ntz89a-holder]' ]);
  helper.whiteList([ 'div[id=om-mkdqdetkhrt9fbco-holder]' ]);
}

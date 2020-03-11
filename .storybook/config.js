import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

const req = require.context('../story', true, /\.stories\.tsx$/);
console.log('hi req', req);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  showAddonPanel: false,
});

configure(loadStories, module);

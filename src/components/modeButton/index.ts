import { createNode } from 'utils/createNode';

import { ICON_SETTINGS } from 'icons';

export const modeButton = (callback?: any) => {
  const node = createNode({
    class: 'ch-btn',
    style: {
      width: '25px',
      height: '25px',
      float: 'right',
      backgroundImage: ICON_SETTINGS,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '20px',
      backgroundPosition: 'center',
    },
  });

  if (callback) {
    node.addEventListener('click', callback);
  }

  return node;
}
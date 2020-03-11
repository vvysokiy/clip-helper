import { safeGet } from 'utils/safeGet';
import { createNode } from 'utils/createNode';

import { STYLES_CH_CONSOLE } from './css';

let consoleNode: HTMLElement;

const receiveMessage = (event: any) => {
  console.log('receiveMessage -> event', );
  const { innerHTML } = consoleNode;
  consoleNode.innerHTML = `
    ${innerHTML}
    <div style="color: white;"><i>${(new Date()).toLocaleTimeString()}</i> - ${event.detail}</div>
  `;
}

export const renderConsole = () => {
  consoleNode = createNode({
    type: 'div',
    id: 'clipHelperConsole',
    class: 'ch__console',
    style: STYLES_CH_CONSOLE,
  });
  window.addEventListener('clip-helper-console', receiveMessage);
  return consoleNode;
};
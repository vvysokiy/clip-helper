import { renderInfo } from 'components/info';
import { renderConsole } from 'components/console';
import { modeButton } from 'components/modeButton';

import { STYLES_CH, STYLES_CH_INFO } from 'config/css';

import { safeGet } from 'utils/safeGet';
import { createNode } from 'utils/createNode';

enum CLIP_HELPER_MODE{
  startPanel,
  infoPanel,
  openPanel,
}

/** Блок простого отображения */
type InfoContentType = {
  label: string
  value: string
}

class ClipHelper {
  /** Режим работы панели */
  private mode = CLIP_HELPER_MODE.startPanel

  /** Панель */
  private panel: any

  constructor(root: Element, content: any) {
    if (root) {
      this.render(root, content);
    }
  }

  renderInfoPanel(infoContentList: InfoContentType[], node: HTMLElement) {
    infoContentList.forEach(infoContent => {
      node.appendChild(renderInfo(infoContent));
    });
  }

  toogleMode() {
    console.log('this.panel', { d: this.panel});
    // Create a new event
    const event = new CustomEvent('clip-helper-console', { detail: 'toogleMode' });
    // Dispatch the event
    window.dispatchEvent(event);
  }

  render(root: Element, content: any) {
    const panel = createNode({
      type: 'div',
      class: 'ch',
      style: STYLES_CH,
    });
    const infoPanel = createNode({
      type: 'div',
      class: 'ch__info',
      style: STYLES_CH_INFO,
    });

    if (safeGet(() => content.info)) {
      this.renderInfoPanel(content.info, infoPanel);
    }

    panel.appendChild(modeButton(() => this.toogleMode()));
    panel.appendChild(infoPanel);
    panel.appendChild(renderConsole());

    this.panel = panel;
    root.appendChild(this.panel);
  }
}

type EntryPropsType = {
  active: boolean
  entry?: string
  content?: any
}

type PanelType = (props?: EntryPropsType) => void

export const panel: PanelType = (props) => {
  const { entry, content } = props;
  const root = document.querySelector(entry)
  new ClipHelper(root, content);
};

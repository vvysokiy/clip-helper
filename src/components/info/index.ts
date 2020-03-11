import { createNode } from 'utils/createNode';

import { COLORS } from 'config/css';

/** Блок простого отображения */
type InfoType = {
  label: string
  value: string
}

/** Блок простого отображения информации */
export const renderInfo = ({ label, value }: InfoType) => createNode({
  class: 'ch-info',
  style: {
    display: 'flex',
    marginRight: '20px',
  },
  body: `
    <div style="color: ${COLORS.colorLabel}; margin-right: 5px;">
      ${label}:
    </div>
    <div style="color: ${COLORS.colorValue};">
      ${value}
    </div>
  `
});

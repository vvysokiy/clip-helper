type EntryPropsType = {
  active: boolean
  entry?: string
}

type EntryType = (props?: EntryPropsType) => Promise<void>

const PANEL_SETTINGS = {
  info: [
    {
      label: 'label1',
      value: 'value1',
    },
    {
      label: 'version',
      value: '1.0.0',
    },
    {
      label: 'version',
      value: '1.0.0',
    },
    {
      label: 'version',
      value: '1.0.0',
    },
    {
      label: 'label2',
      value: 'value2',
    },
    {
      label: 'label3',
      value: 'value4',
    }
  ],
  // settings: []
}

export const entry: EntryType = async (props = {
  active: false,
  entry: 'body',
}) => {
  const { active } = props

  if (active) {
    const { panel } = await import('panel');
    panel({
      ...props,
      content: PANEL_SETTINGS,
    });
  }
};

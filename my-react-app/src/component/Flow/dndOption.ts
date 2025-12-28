export const createDndPanelItems = (lf: any ) => [
  {
    label: '选区',
    className: 'custom-selection',
    icon: 'data:image/png;base64,...',
    callback: () => {
      lf.openSelectionSelect()
      lf.once('selection:selected', () => {
        lf.closeSelectionSelect()
      })
    },
  },
  {
    type: 'UserTask',
    label: '用户任务',
    icon: 'data:image/png;base64,...',
    properties: {
      disabled: true,
    },
  },
  {
    type: 'circle',
    text: '开始',
    label: '开始节点',
    icon: 'data:image/png;base64,...',
  },
]

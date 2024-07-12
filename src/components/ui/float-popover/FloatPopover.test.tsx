import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'

import { FloatPopover } from './FloatPopover'

describe('FloatPopover', () => {
  it('renders trigger element and shows popover on hover', () => {
    render(
      <FloatPopover triggerElement={<button>Hover me</button>}>
        Popover content
      </FloatPopover>,
    )

    // 检查触发元素是否渲染
    expect(screen.getByText('Hover me')).toBeInTheDocument()

    // 模拟鼠标悬停
    fireEvent.mouseOver(screen.getByText('Hover me'))

    // 检查 popover 内容是否显示
    expect(screen.getByText('Popover content')).toBeInTheDocument()
  })
})

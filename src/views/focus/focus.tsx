import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'

interface IFocus {
  children?: ReactNode
}

const Focus: FC<IFocus> = () => {
  return <div> Focus</div>
}

export default memo(Focus)

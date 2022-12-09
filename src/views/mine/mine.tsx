import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'

interface IMine {
  children?: ReactNode
}

const Mine: FC<IMine> = () => {
  return <div> Mine</div>
}

export default memo(Mine)

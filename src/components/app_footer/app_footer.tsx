import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'

interface IAppFooter {
  children?: ReactNode
}

const AppFooter: FC<IAppFooter> = () => {
  return <div> AppFooter</div>
}

export default memo(AppFooter)

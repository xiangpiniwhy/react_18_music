import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'


interface IAppHeader  {
  children?: ReactNode
}

const AppHeader:FC<IAppHeader> = ()=>{
    return (
        <div> AppHeader</div>
    )
}

export default memo(AppHeader)

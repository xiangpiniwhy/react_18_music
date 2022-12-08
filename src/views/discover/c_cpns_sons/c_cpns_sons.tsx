import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'


interface ISons  {
  children?: ReactNode
}

const Sons:FC<ISons> = ()=>{
    return (
        <div> Sons</div>
    )
}

export default memo(Sons)

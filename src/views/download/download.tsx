import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'


interface IDowmload  {
  children?: ReactNode
}

const Dowmload:FC<IDowmload> = ()=>{
    return (
        <div> Dowmload</div>
    )
}

export default memo(Dowmload)

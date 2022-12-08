import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'

interface IRecommend {
  children?: ReactNode
}

const Recommend: FC<IRecommend> = () => {
  return <div> Recommend</div>
}

export default memo(Recommend)

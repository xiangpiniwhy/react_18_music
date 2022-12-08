import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'

interface IRanking {
  children?: ReactNode
}

const Ranking: FC<IRanking> = () => {
  return <div> Ranking</div>
}

export default memo(Ranking)

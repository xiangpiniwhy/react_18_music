import React, { memo, FC } from 'react'
import type { ReactNode } from 'react'

interface IDjradio {
  children?: ReactNode
}

const Djradio: FC<IDjradio> = () => {
  return <div> Djradio</div>
}

export default memo(Djradio)

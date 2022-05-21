import type { CSSProperties, FC } from 'react'
import { memo } from 'react'

const styles: CSSProperties = {
  width: '45px',
  height: '75px',
  border: '1px dashed gray',
  padding: '0.2rem 0.5rem',
  cursor: 'move',
}

export interface BoxProps {
  title: string
  preview?: boolean
}

export const Deck: FC<BoxProps> = memo(function Deck({ title, preview }) {
  return (
    <div
      style={{ ...styles }}
    >
      {title}
    </div>
  )
})

import type { CSSProperties, FC } from 'react'
import { memo } from 'react'

const styles: CSSProperties = {
  width: '40px',
  height: '70px',
  border: '1px solid gray',
  padding: '0.2rem 0.5rem',
  cursor: 'move',
}

export interface BoxProps {
  title: string
  preview?: boolean
}

export const Card: FC<BoxProps> = memo(function Card({ title, preview }) {
  // const backgroundColor = yellow ? 'yellow' : 'white'
  return (
    <div
      style={{ ...styles }}
    >
      {title}
    </div>
  )
})

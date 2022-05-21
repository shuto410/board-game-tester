import type { CSSProperties, FC } from 'react'
import { memo } from 'react'

import { Card } from './Card'

const styles: CSSProperties = {
  display: 'inline-block',
}

export interface CardDragPreviewProps {
  title: string
}

export const CardDragPreview: FC<CardDragPreviewProps> = memo(
  function CardDragPreview({ title }) {
    return (
      <div style={styles}>
        <Card title={title} preview />
      </div>
    )
  },
)

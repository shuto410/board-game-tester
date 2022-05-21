import type { CSSProperties, FC } from 'react'
import { memo } from 'react'

import { Deck } from './Deck'

const styles: CSSProperties = {
  display: 'inline-block',
}

export interface DeckDragPreviewProps {
  title: string
}

export const DeckDragPreview: FC<DeckDragPreviewProps> = memo(
  function DeckDragPreview({ title }) {
    return (
      <div style={styles}>
        <Deck title={title} preview />
      </div>
    )
  },
)

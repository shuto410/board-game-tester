import type { CSSProperties, FC } from 'react'
import type { XYCoord } from 'react-dnd'
import { useDragLayer } from 'react-dnd'
import { CardDragPreview } from './Items/Card/CardDragPreview'
import { DeckDragPreview } from './Items/Deck/DeckDragPreview'

import { ItemTypes } from './ItemTypes'

const layerStyles: CSSProperties = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
}

function getItemStyles(
  initialOffset: XYCoord | null,
  currentOffset: XYCoord | null,
//   isSnapToGrid: boolean,
) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }

  let { x, y } = currentOffset

//   if (isSnapToGrid) {
//     x -= initialOffset.x
//     y -= initialOffset.y
//     ;[x, y] = snapToGrid(x, y)
//     x += initialOffset.x
//     y += initialOffset.y
//   }

  const transform = `translate(${x}px, ${y}px)`
  console.log('initial: ', initialOffset)
  console.log('transform: ', transform)
  return {
    transform,
    WebkitTransform: transform,
  }
}

export const CustomDragLayer: FC = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }))

  function renderItem() {
    switch (itemType) {
      case ItemTypes.CARD:
        return <CardDragPreview title={item.title} />
      case ItemTypes.DECK:
        return <DeckDragPreview title={item.title} />
      default:
        return null
    }
  }

  if (!isDragging) {
    return null
  }
  return (
    <div style={layerStyles}>
      <div
        style={getItemStyles(initialOffset, currentOffset)}
      >
        {renderItem()}
      </div>
    </div>
  )
}

import update from 'immutability-helper'
import type { CSSProperties, FC } from 'react'
import { useCallback, useState } from 'react'
import { useDrop } from 'react-dnd'
import { DraggableCard } from './Items/Card/DraggableCard'
import { DraggableDeck } from './Items/Deck/DraggableDeck'

import type { DragItem } from './interfaces'
import { ItemType, ItemTypes } from './ItemTypes'

const styles: CSSProperties = {
  width: 300,
  height: 300,
  border: '1px solid black',
  position: 'relative',
}


interface BoxMap {
  [key: string]: { top: number; left: number; title: string, itemType: ItemType }
}

export const Container: FC= () => {
  const [boxes, setBoxes] = useState<BoxMap>({
    a: { top: 20, left: 80, title: 'Card1', itemType: 'card' },
    b: { top: 180, left: 20, title: 'Card2', itemType: 'card' },
    c: { top: 100, left: 160, title: 'Deck1', itemType: 'deck' },
  })

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      )
    },
    [boxes],
  )

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.CARD,
      drop(item: DragItem, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset() as {
          x: number
          y: number
        }

        let left = Math.round(item.left + delta.x)
        let top = Math.round(item.top + delta.y)
        // if (snapToGrid) {
        //   ;[left, top] = doSnapToGrid(left, top)
        // }

        moveBox(item.id, left, top)
        return undefined
      },
    }),
    [moveBox],
  )

  return (
    <div ref={drop} style={styles}>
      {Object.keys(boxes).map((key) => (
        boxes[key].itemType === ItemTypes.CARD ?
          <DraggableCard
            key={key}
            id={key}
            {...(boxes[key] as { top: number; left: number; title: string })}
          /> :
          <DraggableDeck
            key={key}
            id={key}
            {...(boxes[key] as { top: number; left: number; title: string })}
          />
      ))}
    </div>
  )
}

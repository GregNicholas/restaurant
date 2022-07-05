import { iteratorSymbol } from 'immer/dist/internal'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/customerSlice'

interface CustomerCardTypes {
    name: string
    items: string[]
}

export default function CustomerCard({ name, items }: CustomerCardTypes) {
  const [itemsInput, setItemsInput] = useState('')
  const [foodItems, setFoodItems] = useState(items)

  const dispatch = useDispatch()

  return (
    <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
            {foodItems.map(item => <div key={item} className="customer-food">{item}</div>)}
            <div className="customer-food-input-container">
            <input onChange={e => setItemsInput(e.target.value)} />
            <button onClick={() => dispatch(addItem(itemsInput))}>Add</button>
            </div>
        </div>
    </div>
  )
}

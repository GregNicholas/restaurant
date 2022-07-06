import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice'

interface CustomerCardType {
    name: string
    id: string
    food: string[]
}

export default function CustomerCard({ name, id, food }: CustomerCardType) {
  const [foodInput, setFoodInput] = useState('')

  const dispatch = useDispatch()

  return (
    <div className="customer-food-card-container">
        <p>{name}</p>
        <div className="customer-foods-container">
          <div className="customer-food">
            {food.map(item => <p key={item}>{item}</p>)}
          </div>
            <div className="customer-food-input-container">
            <input onChange={e => setFoodInput(e.target.value)} value={foodInput} />
            <button onClick={() => {
              if(foodInput){
                dispatch(addFoodToCustomer({id: id, food: foodInput}))
                setFoodInput('')
              }
            }
            }>Add</button>
            </div>
        </div>
    </div>
  )
}

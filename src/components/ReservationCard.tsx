import React from 'react'
import { useDispatch } from 'react-redux'
import { addCustomer } from '../features/customerSlice'
import { removeReservation } from '../features/reservationsSlice'

interface ReservationCardTypes {
    name: string
    index: number
}

export default function ReservationCard({ name, index }: ReservationCardTypes ) {

    const dispatch = useDispatch()
    
  return (
    <div onClick={() => {
        dispatch(removeReservation(index))
        dispatch(addCustomer({name: name, items: []}))
    }}
        className="reservation-card-container">{name}</div>
  )
}

import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


export const Viewnotes = () => {
    const data = useSelector((state) => state.note)
    
    function handleOrder(data) {
        const sorted = data.sort((a, b) => {
            const aDate = new Date(a.date)
            const bDate = new Date(b.date)
            return bDate.getTime() - aDate.getTime()
        })
        console.log(sorted)
    }

    useEffect(() => {
        handleOrder(data)
    },[data])

    return (
        <div>
            
        </div>
    )
}

import React, { useState, useEffect } from "react"

const Time = () => {
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => {
        const updateTimeAndDate = () => {
            const currentTime = new Date()

            setTime(currentTime.toLocaleTimeString([], { 
                hour: "2-digit", 
                minute: "2-digit", 
                second: "2-digit", 
                hour12: false 
            }))

            setDate(currentTime.toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            }))
        }

        updateTimeAndDate()
        const interval = setInterval(updateTimeAndDate, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h1>{time}</h1>
            <h2>{date}</h2>
        </div>
    )
}

export default Time

import React from 'react'
import Card from './components/Card'
import { Card_Data } from './Card_Data'

const App = () => {
    return (
        <div className="container">
            <span className='line'><svg width="189" height="9" viewBox="0 0 189 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="0.375" width="188" height="8" fill="#01C8FF" />
                <rect y="0.375" width="166" height="8" fill="#2C49FE" />
            </svg></span>
            <h1 className='heading'>Choose your next event</h1>
            <div class="row">
                {Card_Data.map((card,i) => {
                    return <div className='col-4' key={i}>
                        <Card smallh={card.smallh} date={card.date} city={card.city} people={card.people} button={card.button} />
                       </div>
               })}
            </div>
        </div>
    )
}

export default App
import React from 'react'
import Card from './Card.jsx'

const Board = ({zoombinis}) => {
     return (
          <section>
               {zoombinis.map(function(zoom, index) {
                    return (
                        <Card
                              key={index}
                              name={zoom.name}
                              axe={zoom.axe}
                              glasses={zoom.glasses}
                              nose={zoom.nose}
                              locomotion={zoom.locomotion}
                              image={zoom.image}
               }




                    )}
          </section>
     )
} 
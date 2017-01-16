import React from 'react'
import Board from './Board.jsx'

class GuessWho extends React.Component{
     constructor(props){
          super(props)
          this.state = { zoombinis: []}
     }

     loadZoombinis(url){
          const request = new XMLHttpRequest()
          request.open('GET', url)
          request.onload = () => {
               if (request.status === 200) {
                    const jsonString = request.responseText
                    console.log(jsonString)
                    const zList = JSON.parse(jsonString)
                    console.log(zList)
                    this.setState({zoombinis:zList.zoombinis})
               }
          }
          request.send()
     }

     componentDidMount(){
          this.loadZoombinis(this.props.url)
     }

     render(){
          return(
               <h1>Hello</h1>
               )
     }
}

export default GuessWho
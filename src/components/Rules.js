import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class Rules extends Component {
  render() {
    return (
      <div>
           <Navbar />
           <div className="App-header high">
                <h1 className="text-center m-3">Rules</h1>
           </div>
          <Footer />
      </div>
    )
  }
}

import React, { Component } from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import image from '../images/home3.jpg'

export default class Home extends Component {
  render() {
    
    return (
        <div>
            <Navbar />
            <div className="row high" style={bg}>
                    <div className="col-12">
                         <h3 className="text-center m-5  title">Hello World </h3>
                    </div>
            </div>
              <div className="container">
              <div className="row black m-3">
                <p className="text-center t m-3">Major Goals of  Program</p>
                    <div className="title m-2 card black p-10">
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">1. Inspire young developers to get involved in Open Source software 
                          development.</li>
                          <li className="list-group-item">2. Help 1st and 2nd year students to master the development workflow of
                          Git and GitHub.</li>
                          <li className="list-group-item">3. Connect with the mentors in the campus, help them  in projects even
                          after the program ends.</li>
                          <li className="list-group-item">4. Prepare for other Open Source programs</li>
                        </ul>
                      </div>
                  </div>
                  <div className="row m-3">
                    <button className="btn btn-primary m-2"><a href="https://github.com/whoami-shubham/Summer_of_Code/blob/master/Student.md" className="link_white">Student Guide</a></button> <button className="btn btn-primary m-2"><a href="https://github.com/whoami-shubham/Summer_of_Code/blob/master/Mentor.md" className="link_white">Mentor Guide</a></button>
                  </div>
            </div>
            
            <Footer />
        </div>
     
    )
  }
}

const bg = {
  backgroundImage: 'url(' + image + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
}

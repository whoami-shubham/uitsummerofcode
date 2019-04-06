import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
  render() {
    return (
      <div>
         <div className="col-sm-12 last">
            <div className="container">
                    <div className="col-sm-12 font">
                        <span className="last_footer"><Link to="/we" style={link}> We </Link></span>
                        <span className="last_footer"><Link to="/privacy" style={link}>privacy</Link></span>
                        <span className="last_footer"><Link to="/rules" style={link}> rules </Link></span>
                        <span className="last_footer"><Link to="/help" style={link}> help</Link></span>
                    </div>
            </div>
        </div>
    </div>
    )
  }
}
const link = {
  textDecoration:"none",
}
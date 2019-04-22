import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
  render() {
    return (
      <div>
         <div className="col-sm-12 last">
            <div className="container">
                    <div className="col-sm-12">
                        <span className="last_footer"><a href="https://github.com/uitsummerofcode" style={link}> We </a></span>
                        <span className="last_footer"><Link to="/privacy" style={link}>privacy</Link></span>
                        <span className="last_footer"><a href="https://github.com/summerofcodeatuit/2019/issues/new?assignees=&labels=help+wanted&template=help.md&title=" style={link}> help</a></span>
                        <span className="last_footer"><Link to="/students" style={link}>students</Link></span>
                        <span className="last_footer"><Link to="/mentors" style={link}>mentors</Link></span>
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
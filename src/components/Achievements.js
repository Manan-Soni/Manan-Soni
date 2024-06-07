import React from 'react'

export default function Achievments() {
  return (
    <div id='achievements'>
      <h1 id='heading_achievements'><b>Some of my achievments</b></h1>
      <br />
        <ul id='achv_list'>
          <li><span style={{color:'green'}}><b>Winner of Bro Code 2022</b></span> (A competitive coding competition) </li>
          <li><span style={{color:'green'}}><b>Co-leader</b></span> of the team <span style={{color:'green'}}><b>winning best use of Auth0</b></span> at <span style={{color:'green'}}><b>HackSVIT 2022</b></span></li>
          <li><span style={{color:'green'}}><b>Leader </b></span>of team winning for the <span style={{color:'green'}}><b>best use of Github</b></span> at <span style={{color:'green'}}><b>HackThisFall3.0</b></span></li>
        </ul>
    </div>
  )
}

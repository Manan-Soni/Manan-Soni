import React from 'react'

export default function Navbar() {
  return (
    <div id='navbar'>
        <table id='navbar_table'>
            <tr>
                <a href='#hero' style={{textDecoration : 'none'}} ><td>HERO</td></a>
            </tr>
            <tr>
            <a href='#aboutme'><td>ABOUT ME</td></a>
            </tr>
            <tr>
                <a href='#heading_skillset' style={{textDecoration : 'none'}} ><td>SKILLSET</td></a>
            </tr>
            <tr>
                <a href='#achievements' style={{textDecoration : 'none'}} ><td>ACHIEVEMENTS</td></a>
            </tr>
            <tr>
                <a href='#hexsociety' style={{textDecoration : 'none'}} ><td>HEX SOCIETY</td></a>
            </tr>
        </table>
    </div>
  )
}
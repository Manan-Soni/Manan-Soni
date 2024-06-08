import React from 'react' 
import UnrealImg from '../Images/Cover_Unreal.png';

export default function Projects() {
  return (
    <div>
      <p id='heading_projects'><b>Past projects</b></p>

      <div className="card" id='unrealengine' style={{width: '30rem'}} onClick={alterTxt}>
        <div className="card-body">
          <h5 className="card-title" id='heading_unrealengine'>Game Designing</h5>
          <img src={UnrealImg} alt='Unreal Engine 5 img' style={{width:'440px'}}/>
          <p className="card-text" id='text_unrealengine' ></p>
        </div>
      </div>
    </div>
  )
}

const abt_unreal = 'This project showcases a meticulously designed game level created using Unreal Engine, a powerful and versatile game development platform. In this level, players are transported into a dynamic and engaging environment filled with intricate details and compelling gameplay mechanics.'

let flag = 0

function addTxt(Id,text) {
  document.getElementById(Id).innerHTML += text
}

function rmvTxt(Id) {
  document.getElementById(Id).innerHTML = ''
}

function alterTxt() {
  if (flag === 0){
      document.getElementById('unrealengine').style.height = '35rem'
      for (let i=0; i<abt_unreal.length; i++) 
        {setTimeout(addTxt("text_unrealengine",abt_unreal.charAt(i)),5000)}
      flag = 1
  }
  
  else if (flag === 1){
    rmvTxt("text_unrealengine")
    document.getElementById('unrealengine').style.height = '18rem'
    flag = 0
  }
}
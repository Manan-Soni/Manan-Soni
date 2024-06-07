import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';


export default function Skills() {
  return (
    <div>
        <p id='heading_skillset'><b>My skillset <h2>Hover for more info(Proficency rated out of 10)</h2></b></p>

        <div className="card" id='piechart' style={{width: '350px',height:'300px'}}>
            <div className="card-body">
                
            <h5 className="card-title" >Languages</h5>
            <PieChart id='piechart_ProgLangs'
              slotProps={{
                legend: {
                  hidden: true
                },
              }}
              series={[
                { 
                  data: [
                    { id: 0, value: 8, label: 'Python', color: '#013b0b'},
                    { id: 1, value: 5, label: 'C', color: '#095716'},
                    { id: 2, value: 6, label: 'R', color: '#147024' },
                    { id: 3, value: 7, label: 'Java', color: '#218532'},
                    { id: 4, value: 7, label: 'Javascript', color: '#345c3b'},

                  ],
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  innerRadius: 42,
                  outerRadius: 90,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,

                  color: 'white'
                }
              ]}
              
              width={400}
              height={200}
            />
        </div>
      </div>

      <div className="card" id='piechart' style={{width: '350px',height:'300px'}}>
        <div className="card-body">
          <h5 className="card-title">Backend</h5>
          <PieChart id='piechart_Backend'
                slotProps={{
                  legend: {
                    hidden: true
                  },
                }}
                series={[
                  { 
                    data: [
                      { id: 0, value: 7, label: 'Javascript', color: '#013b0b' },
                      { id: 1, value: 6, label: 'MySQL', color: '#095716' },
                      { id: 2, value: 3, label: 'MongoDB', color: '#147024' },
                    ],
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    innerRadius: 42,
                    outerRadius: 90,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,

                  }
                ]}
                width={400}
                height={200}
              />
        </div>
      </div>

      <div className="card" id='piechart' style={{width: '350px',height:'300px'}}>
        <div className="card-body">
          <h5 className="card-title">Frameworks</h5>
          <PieChart id='piechart_Frameworks'
                slotProps={{
                  legend: {
                    hidden: true
                  },
                }}
              series={[
                { 
                  data: [
                    { id: 0, value: 7, label: 'Reactjs', color: '#013b0b' },
                    { id: 1, value: 2, label: 'Flutter', color: '#095716' },
                  ],
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  innerRadius: 42,
                  outerRadius: 90,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,

                }
              ]}
              width={400}
              height={200}
              />
        </div>
      </div>
      
      <div className="card" id='piechart' style={{width: '350px',height:'300px'}}>
        <div className="card-body">
          <h5 className="card-title">Libraries</h5>
            <PieChart id='piechart_Libraries'
              slotProps={{
                legend: {
                  hidden: true
                },
              }}
              series={[
                { 
                  data: [
                    { id: 0, value: 8, label: 'Matplotlib', color: '#013b0b' },
                    { id: 1, value: 3, label: 'PyQT', color: '#095716' },
                    { id: 2, value: 6, label: 'Tkinter', color: '#147024' },
                    { id: 3, value: 8, label: 'Numpy', color: '#218532' },
                    { id: 4, value: 8, label: 'RegEx', color: '#345c3b' },
                    { id: 5, value: 8, label: 'Pandas', color: '#022608' },
                    { id: 6, value: 7, label: 'Plotly', color: '#102e01' },
                  ],
                  highlightScope: { faded: 'global', highlighted: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  innerRadius: 42,
                  outerRadius: 90,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  
                }
              ]}
              width={400}
              height={200}
            />
        </div>
        </div>

        <div className="card" id='piechart' style={{width: '350px',height:'300px'}}>
        <div className="card-body">
          <h5 className="card-title">3D Engines</h5>
          <PieChart id='piechart_3DEngines'
                slotProps={{
                  legend: {
                    hidden: true
                  },
                }}
                series={[
                  { 
                    data: [
                      { id: 0, value: 7, label: 'Unreal Engine', color: '#013b0b' },
                      { id: 1, value: 2, label: 'Blender', color: '#095716' },
                    ],
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    innerRadius: 42,
                    outerRadius: 90,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,
                  }
                ]}
                width={400}
                height={200}
              />
        </div>
        </div>

        <div className="card" id='piechart' style={{width: '350px',height:'300px'}}>
        <div className="card-body">
          <h5 className="card-title">Designing</h5>
        <PieChart id='piechart_Designing'
                  slotProps={{
                    legend: {
                      hidden: true
                    },
                  }}
                series={[
                  { 
                    data: [
                      { id: 0, value: 8, label: 'Canva', color: '#013b0b' },
                      { id: 1, value: 7, label: 'Figma', color: '#095716' },
                    ],
                    highlightScope: { faded: 'global', highlighted: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                    innerRadius: 42,
                    outerRadius: 90,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: 0,
                    endAngle: 360,

                  }
                ]}
                width={400}
                height={200}
                />
          </div>
        </div>
    </div>
  )
}

import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';

export default function Skillset() {
  return (
    <div id='skillset'>
        <p id='heading_skillset'><b>My skillset Hover</b></p>
        <p id='subheading_skillset'>for more info(Proficency rated out of 10)</p>
        <br />

        <table id='skills_table'>
          <tr>
            <th><h4><b>Languages</b></h4></th>
            <th><h4><b>Backend</b></h4></th>
            <th><h4><b>Frameworks</b></h4></th>
          </tr>

          <tr> 
            <td>
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
            </td>
          
            <td>
              <PieChart id='piechart_ScriptLangs'
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
            </td>

            <td>
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
            </td>
          </tr>

          <tr>
            <th><h4><b>Libraries</b></h4></th>
            <th><h4><b>3D Engines</b></h4></th>
            <th><h4><b>Designing</b></h4></th>
          </tr>

          <tr>
            <td>
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
            </td>
              
            <td>
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
            </td>

            <td>
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
            </td>
          </tr>
        </table>
    </div>
  )
}

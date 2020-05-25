import React, { Component } from 'react'
import {HorizontLBar} from 'react-chartjs-2';

const Bargraph = () => {
  const [chartData, serChartData] = usestate({})

  const chart = () => {
    setChartDate({
      labels:['Image 1', 'Image 2'],  
      datasets:[
      {
        label: 'Photo Competition',
        data: [10, 20],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)'
        ],
        borderWidth: 4
      }

      ]
    })
    
  }

useEffect(() => {
  chart()
}, [])

return(
  <div className="App">
    <h1>Bargraph</h1>
    <div>
      <HorizontLBar data ={chartData} options = {{
        responsive: true,
        title: {text: 'Vote for your favorite response!', display: true},
      }}/>
    </div>
  </div>
  )

}
export default Bargraph;
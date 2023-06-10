import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
import { Card } from 'antd';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

const Chart = (props) => {
    const reveneuData= {
        labels: ['2023-6-1', '2023-6-2'],
        datasets: [{
          label: [
            'DC'
          ],
          data: [3, 4],
          borderWidth: 1,
          backgroundColor : [
            '#428afa',
            '#05c1e4'

          ],
          barThickness: 50,
          borderRadius: 10,
        }]
    }
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
          title: {
            display: true,
            text: "Goods Received vs Delivery Challan",
          },
        },
        maintainAspectRatio: false,
        aspectRatio: 1.2
      };
  return (
    <Card style={{ width: 400, borderRadius: 20}}>
        <Bar options={options} data={reveneuData} height={null} />
    </Card>
  )
}

export default Chart
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend
  );
export const LineChart = () => {
    const labels = ["abc","def","ghi","jkl"];
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Yearly Views',
          },
        }
    }

    const data = {
        labels,
        datasets: [
          {
            label: 'Views',
            data: [1,2,3,4],
            borderColor: 'rgba(107,70,193,0.5)',
            backgroundColor: '#6b46c1',
          },
        ],
      };
    return <Line options={options} data={data} />;
}

 


export const DoughnutChart = ({ users = [] }) => {
    const data = {
      labels: ['Subscribed', 'Not Subscribed'],
      datasets: [
        {
          label: 'Views',
          data: [3,20],
          borderColor: ['rgb(62,12,171)', 'rgb(214,43,129)'],
          backgroundColor: ['rgba(62,12,171,0.3)', 'rgba(214,43,129,0.3)'],
          borderWidth: 1,
          
        },
      ],
    };
  
    return <Doughnut data={data} />;
  };
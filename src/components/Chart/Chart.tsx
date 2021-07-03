import React, { useCallback } from 'react';
import './chart.scss';
import { saveAs } from 'file-saver';

import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useCurrentPng } from 'recharts-to-png';
import { Button } from '@material-ui/core';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Chart: React.FC = () => {
  const {
    data: { statistic },
  } = useTypedSelector((state) => state);
  const data = [
    {
      value: statistic?.column1s,
      Vacancy: statistic?.column1Count,
      Median: statistic?.mediana,
    },
    {
      value: statistic?.column2s,
      Vacancy: statistic?.column2Count,
      Median: statistic?.mediana,
    },
    {
      value: statistic?.column3s,
      Vacancy: statistic?.column3Count,
      Median: statistic?.mediana,
    },
    {
      value: statistic?.column4s,
      Vacancy: statistic?.column4Count,
      Median: statistic?.mediana,
    },
    {
      value: statistic?.column5s,
      Vacancy: statistic?.column5Count,
      Median: statistic?.mediana,
    },
    {
      value: statistic?.column6s,
      Vacancy: statistic?.column6Count,
      Median: statistic?.mediana,
    },
  ];
  const [getPng, { ref, isLoading }] = useCurrentPng();
  const handleDownload = useCallback(async () => {
    const png = await getPng();
    if (png) {
      saveAs(png, 'myChart.png');
    }
  }, [getPng]);

  if (statistic !== null) {
    return (
      <div className="chart">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={400}
            data={data}
            ref={ref}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}>
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="value" scale="band" />
            <YAxis label={{ value: 'Кол-во вакансий', angle: -90, position: 'insideLeft' }}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="Vacancy" barSize={40} fill="#413ea0" />
            <Line type="monotone" dataKey="Median" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
        {/* <Button
          variant="contained"
          color="primary"
          style={{ height: '50px', width: '200px' }}
          onClick={handleDownload}>
          {isLoading ? 'Downloading...' : 'Download Chart PNG'}
        </Button> */}
      </div>
    );
  } else return null;
};

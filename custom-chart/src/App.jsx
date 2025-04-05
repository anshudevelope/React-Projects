import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip } from 'recharts';
import './App.css'

const tdata = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function App() {

  return (
    <>
      <h2 className='heading'>Custom Chart - Using Recharts</h2>
      <ul>
        <li>
          <h3>1. Line Chart</h3>
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={tdata} width={500} height={300} margin={{top: 5, right:100, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " data"} />
              <YAxis />
              <Legend />
              <Tooltip contentStyle={{backgroundColor: 'yellow' }} />
              <Line type="monotone" dataKey="uv" stroke='blue' activeDot={{r:8}} /> 
              <Line type="monotone" dataKey="pv" stroke='red' activeDot={{r:8}} /> 
            </LineChart>
          </ResponsiveContainer>
        </li>
      </ul>
    </>
  )
}

export default App

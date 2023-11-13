import styles from './Stats.module.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Stats(props) {
  const locale = "fi-FI"
  const numberFormat = new Intl.NumberFormat(locale, { style: 'unit', unit: 'kilometer', unitDisplay: 'long' });

  const linedata = props.data
    .filter(item => item.type === "Juoksu")
    .map(item => ({
      date: new Date(item.date).getTime(),
      length: item.length
    }));

  return (
    <div className={styles.stats}>
      <h2>Stats</h2>
      <h2>Juoksutilastot</h2>
      <ResponsiveContainer height={350}>
        <LineChart data={linedata}>
          <Line dataKey='length' />
          <XAxis
            type='number'
            dataKey='date'
            domain={['dataMin', 'dataMax']}
            tickFormatter={value => new Date(value).toLocaleDateString(locale)}
          />
          <YAxis />
          <Tooltip
            labelFormatter={value => new Date(value).toLocaleDateString(locale)}
            formatter={value => [numberFormat.format(value), "Juostu"]}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Stats;
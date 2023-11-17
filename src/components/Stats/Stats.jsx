import styles from './Stats.module.scss';
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Stats(props) {
  const locale = "fi-FI";
  const numberFormat = new Intl.NumberFormat(locale, { style: 'unit', unit: 'kilometer', unitDisplay: 'long' });

  const linedata = props.data
    .filter(item => item.type === "Juoksu")
    .map(item => ({
      date: new Date(item.date).getTime(),
      length: item.length
    }));

  return (
    <div className={styles.stats}>
      <h2>Tilastot</h2>
      <h3>Juoksumäärä</h3>
      <ResponsiveContainer height={350}>
        <LineChart data={linedata}>
          <Line dataKey='length' stroke='#FF0000' dot={{ fill: '#FF0000' }} />
          <XAxis
            type='number'
            dataKey='date'
            domain={['dataMin', 'dataMax']}
            tickFormatter={value => new Date(value).toLocaleDateString(locale)}
          />
          <YAxis />
          <Tooltip
            labelFormatter={value => new Date(value).toLocaleDateString(locale)}
            formatter={value => [numberFormat.format(value), "juostu"]}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Stats;
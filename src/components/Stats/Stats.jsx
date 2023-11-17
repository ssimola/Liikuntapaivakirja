import styles from './Stats.module.scss';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function Stats(props) {
  const locale = "fi-FI";
  const numberFormat = new Intl.NumberFormat(locale, { style: 'unit', unit: 'kilometer', unitDisplay: 'long' });

  const bardata = props.data
    .filter(item => item.type === "Juoksu")
    .map(item => ({
      date: new Date(item.date).getTime(),
      length: item.length
    }));

    return (
      <div className={styles.stats}>
        <h2>Stats</h2>
        <h2>Juoksutilastot</h2>
        <div className={styles.chartContainer}>
          <ResponsiveContainer height={350}>
          <BarChart data={bardata} categoryGap={10}>
            <Bar dataKey='length' fill='#FF0000' barSize={30} />
              <XAxis
                padding={{ left: 15, right: 15 }}
                type='number'
                dataKey='date'
                domain={['dataMin', 'dataMax']}
                tickFormatter={value => new Date(value).toLocaleDateString(locale)}
              />
              <YAxis />
              <Tooltip
                labelFormatter={value => new Date(value).toLocaleDateString(locale)}
                formatter={value => [numberFormat.format(value), "Juostu"]}
                contentStyle={{ background: '#fff', border: '1px solid #ccc' }}
                cursor={{ fill: 'transparent' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }

export default Stats;
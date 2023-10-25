import styles from './Stats.module.scss'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

function Stats(props) {

  const locale = "fi-FI"
  const numberFormat = new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' })

  const linedata = props.data.map(
    (item) => ({
      date: new Date(item.paymentDate).getTime(),
      amount: item.amount
    })
  )

  return (
    <div className={styles.stats}>
      <h2>Tilastot</h2>
      <h3>Juoksumäärä</h3>
      <ResponsiveContainer height={350}>
        <LineChart data={linedata}>
          <Line dataKey='amount' />
          <XAxis type='number'
                 dataKey='date'
                 domain={['dataMin','dataMax']}
                 tickFormatter={
                   value => new Date(value).toLocaleDateString(locale)
                 } />
          <YAxis />
          <Tooltip labelFormatter={
                     value => new Date(value).toLocaleDateString(locale)
                   }
                   formatter={
                     value => [numberFormat.format(value),"maksettu"]
                   } />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
export default Stats
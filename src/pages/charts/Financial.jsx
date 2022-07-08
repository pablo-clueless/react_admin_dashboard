import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts'

import { financialChartData, FinancialPrimaryXAxis, FinancialPrimaryYAxis } from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const date1 = new Date(2017, 1, 1)

const filterValue = (value) => {
  if(value.x >= date1) {
    return value.x, value.high, value.low
  }
}

const returnValue = financialChartData.filter(filterValue)

const Financial = () => {
  const { currentMode } = useStateContext()

  return (
<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title='1203 Historical' category='Finanacial Chart' />
      <div className="w-full">
        <ChartComponent  id='charts' height='420px' primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis} chartArea={{border: {width: 0}}} tooltip={{enable: true, shared: true}} background={currentMode === 'Dark' ? '#33373E' : '#FFF'} crosshair={{enable: true,lineType: 'Vertical',line: {width: 0}}}>
          <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={returnValue} xName='x' yName='low' name='1203 Studio' type='Hilo' low='low' high='high' />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Financial
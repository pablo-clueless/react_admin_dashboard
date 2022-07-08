import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip } from '@syncfusion/ej2-react-charts'

import {} from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const Stacked = () => {
  const { currentMode } = useStateContext()

  return (
<div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title='' category='Stacked Chart' />
      <div className="w-full">
        <ChartComponent  id='stacked-chart' height='420px' primaryXAxis={'x'} primaryYAxis={'y'} chartArea={{border: {width: 0}}} tooltip={{enable: true}} background={currentMode === 'Dark' ? '#33373E' : '#FFF'} legendSettings={{background: 'white'}}>
          <Inject services={[Legend, Tooltip]} />
          <SeriesCollectionDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Stacked
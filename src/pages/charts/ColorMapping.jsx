import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts'

import { colorMappingData, rangeColorMapping, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis } from '../../data/dummy'
import { Header } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'

const ColorMapping = () => {
  const { currentMode } = useStateContext()

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title='Average Monthly Temperature' category='Color Mapping' />
      <div className="w-full">
        <ChartComponent id='bar-chart' height='420px' primaryXAxis={ColorMappingPrimaryXAxis} primaryYAxis={ColorMappingPrimaryYAxis} chartArea={{border: {width: 0}}} tooltip={{enable: true}} background={currentMode === 'Dark' ? '#33373E' : '#FFF'} legendSettings={{background: 'white'}}>
          <Inject services={[ColumnSeries, Category, Tooltip, Legend]} />
          <SeriesCollectionDirective>
            <SeriesDirective dataSource={colorMappingData[0]}  name="Nigeria" xName="x" yName="y" type="Column" cornerRadius={{topLeft: 10,topRight: 10}} />
          </SeriesCollectionDirective>
          <RangeColorSettingsDirective>
            {rangeColorMapping.map((item, index) => (
              <RangeColorSettingDirective key={index} {...item} />
            ))}
          </RangeColorSettingsDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default ColorMapping
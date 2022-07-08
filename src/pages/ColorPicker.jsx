import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex
}

const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header title='ColorPicker' category='App' />
      <div className='text-center'>
        <div id='preview' />
        <div className='flex items-center justify-center gap-32 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Palette</p>
            <ColorPickerComponent id='inline-palette' mode='Palette' modeSwitcher={false} inline showButtons={false} change={change} />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent id='inline-palette' mode='Picker' modeSwitcher={false} inline showButtons={false} change={change} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker
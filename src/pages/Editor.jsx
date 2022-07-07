import React from 'react'

import { EditorData } from '../data/dummy'
import { Header } from '../components'

const Editor = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title='Editor' category='App' />
    </div>
  )
}

export default Editor
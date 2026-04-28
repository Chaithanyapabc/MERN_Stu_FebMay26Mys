import { useState } from 'react'

import './App.css'
import { FunctionName } from './components/FunctionalCompOne.jsx'
import { FunctionalComponentsBasics } from './components/FunctionalComponentsBasics.jsx'
import { ClassComponentsBasics } from './components/ClassComponentsBasics.jsx'
import { FunctionalComp } from './components/FunctionalComponentAdv.jsx'

function App() {

  return (
    //Fragment in react : <> </> 
    <>
      <FunctionName /> {/*Component Name */}
      <FunctionalComponentsBasics />
      <ClassComponentsBasics />
      <FunctionalComp />
    </>
  )
}

export default App

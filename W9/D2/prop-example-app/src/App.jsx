import './App.css'
import { PropBasics } from "./components/P1";
import { PropDestructuring } from "./components/P2"
import { PropsChildren } from "./components/P3"
import { PropDrillingDemo } from "./components/P4"
import { SharedStateParent } from "./components/P5"
import { CompositionDemo } from "./components/P6"
import { ObjectsAndArrayProps } from "./components/P7"
import { PropsImmutablity } from "./components/P8"
import { PropsState } from "./components/P9"
function App() {
  return (
    <>
     {/* <PropBasics />
      <PropDestructuring />
      <PropsChildren />
      <PropDrillingDemo />
      <SharedStateParent />
      <CompositionDemo />
      <ObjectsAndArrayProps />
      <PropsImmutablity/>*/}
      <PropsState />
    </>
  )
}
export default App
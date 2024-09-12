import { useState } from 'react'
import Header from './Components/Header'
import Category from './Components/Category'
import TopRest from './Components/TopRest'
import OnlineDelivery from './Components/OnlineDelivery'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Category />
      <TopRest />
      <OnlineDelivery />
    </>
  )
}

export default App

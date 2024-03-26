import { View, Text } from 'react-native'
import React from 'react'
import Stack_Navigation from './Src/Navigation/Stack_Nav/Stack_Nav'
import { Provider } from 'react-redux'
import Mystore from './Src/Redux/Store'

const App = () => {
  return (
    <Provider  store={Mystore} >
     <Stack_Navigation/>
     </Provider>
   
  )
}

export default App
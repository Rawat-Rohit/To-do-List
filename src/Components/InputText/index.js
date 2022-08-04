import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const InputText = (props) => {
    console.log("InputText Pros:",props)
    const [inputValue, setInputValue] = useState('')
 const onChangeInput = (input) =>{
    setInputValue(input)
}
  return (
    <View>
      <TextInput
      onChangeText={onChangeInput}
      value={inputValue} />
    </View>
  )
}

export default InputText
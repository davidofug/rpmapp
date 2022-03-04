import {
  View,
  Button,
  Text,
  TextInput,
} from 'react-native'
import React from 'react'
import Overlay from '../components/shared/Overlay'
import { COLORS } from '../helpers/constants'
import { GLOBAL_STYLES } from '../styles/style'
const TitheScreen = ({navigation}) => {
  const[form, setForm] = React.useState(false)
  // const [header, setHeader] = React.useState(true)
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Deposit"
        onPress={() => {
          setForm(true)
          setHeader(false)
        }}
      />,
      // headerShown: header,
    })
  },[])
  return (
    <View style={{ flex: 1 }}>
      <Text>Tithe Lessons</Text>
      <Text>Lessons about the tithe</Text>
      {form && (
        <Overlay
          title="Online Tithe Deposit"
          titleIconColor={COLORS.GREY}
          onClose={() => setForm(false)}
          body={(
            <View>
              <TextInput placeholder="Name" />
              <TextInput placeholder="Phone number" />
              <TextInput placeholder="Year joined" />
              <TextInput placeholder="Amount" />
              <TextInput placeholder="Source of tithe" />
              <Button title="Deposit" />
            </View>
          )}
        />
      )}
    </View>
  )
}

export default TitheScreen
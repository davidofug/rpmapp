import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import DATA from '../helpers/bible-studies.js'
import { GLOBAL_STYLES } from '../styles/style'
import { COLORS } from '../helpers/constants.js';

const Item = ({ item, playing, setPlaying }) => {
  const { id, title, date, time, preacher, photo } = item
  return (
    <View style={GLOBAL_STYLES.flatListItem}>
      <Image
        style={{ "width": 50, "height": 50 }}
        source={{uri: "https://reactnative.dev/img/tiny_logo.png"}}
      />
      <View style={GLOBAL_STYLES.flatListItemText}>
        <Text style={GLOBAL_STYLES.flatListItemTitle}>{title}</Text>
        <Text>{date} | {time} | {preacher}</Text>
      </View>
      <View style={GLOBAL_STYLES.flatListItemIcons}>
        {
          playing === id ? (
            <>
              <TouchableOpacity onPress={() => setPlaying(null)}>
                <Icon name="stop-circle" size={25} color="red" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setPlaying(null)}>
                <Icon name="pause-circle" size={25} color="red" />
              </TouchableOpacity>
            </>
          ) :
            (
              <TouchableOpacity onPress={() => setPlaying(id)}>
                <Icon name={playing === id ? 'pause-circle' : 'play-circle'} size={25} color="red" />
              </TouchableOpacity>
            )
        }
      </View>
    </View>
  )
}

const Header = () => {
  return (
    <View style={{
      'flex': 1,
      'flexDirection': 'row',
      'justifyContent': 'space-between',
      'alignItems': 'center'
    }}>
      <TextInput placeholder="Search" style={GLOBAL_STYLES.field} />
{/*       <TouchableOpacity>
        <FAIcon name="calendar" size={20} color="red" />
      </TouchableOpacity> */}
      <TouchableOpacity>
        <FAIcon name="search" size={20} color="red" />
      </TouchableOpacity>
    </View>
  )
}
const Footer = () => {
  return (
    <View style={GLOBAL_STYLES.flatListFooter}>
      <TouchableOpacity>
        <FAIcon name="microphone" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FAIcon name="play" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FAIcon name="paperclip" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FAIcon name="paper-plane" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
    </View>
  )
}

const BibleScreen = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: ()=> <Header />,
  })

  const [playing, setPlaying] = React.useState(null)

  const renderItem = (item) => <Item {...item} playing={playing} setPlaying={setPlaying}/>

  return (
    <>
      <View style={GLOBAL_STYLES.flatListContainer}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <View style={GLOBAL_STYLES.flatListItemSeperator} />}
        />
      </View>
      <Footer />
    </>
  )
}

export default BibleScreen
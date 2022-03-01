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
  const { title, date, time, preacher, photo } = item
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
        <TouchableOpacity>
          <Icon name="stop-circle" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setPlaying(!playing)}>
          <Icon name={playing ? 'pause-circle' : 'play-circle'} size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const Header = () => {
  return (
    <View>
      <TextInput placeholder="Search" style={GLOBAL_STYLES.field} />
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

const BibleScreen = () => {
  const [isPlaying, setPlaying] = React.useState(false)

  const renderItem = (item) => <Item {...item} playing={isPlaying} setPlaying={setPlaying}/>

  return (
    <>
      <View style={{'paddingBottom': 40}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={GLOBAL_STYLES.flatListItemSeperator} />}
        ListHeaderComponent={() => <Header />}
      />
    </View>
      <Footer />
    </>
  )
}

export default BibleScreen
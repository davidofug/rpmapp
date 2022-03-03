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

const Header = ({headerSwitch}) => {
  return (
    <View style={{
      // 'flex': 1,
      'flexDirection': 'row',
      'alignItems': 'center',
      // 'borderWidth': 1,
      'justifyContent': 'flex-end',
      // 'width': '100%',
    }}>
      {/* <TextInput placeholder="Search" style={{ 'width': '80%' }} /> */}
      <TouchableOpacity onPress={() => headerSwitch(false)}>
          <FAIcon name="search" size={20} color="red" />
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <FAIcon name="calendar" size={20} color="red" />
        </TouchableOpacity> */}
        {/* <TouchableOpacity style={{'marginLeft':15}}>
          <FAIcon name="user" size={20} color="red" />
        </TouchableOpacity> */}
    </View>
  )
}
const SearchHeader = ({ navigation}) => {
  return (
      <View style={[GLOBAL_STYLES.spaceHorizontal,GLOBAL_STYLES.customHeader]}>
      <View style={[GLOBAL_STYLES.flexRow,{'justifyContent':'center'}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-left"
            size={25}
            stroke={2}
            color={COLORS.BLACK}
          />
        </TouchableOpacity>
        <View style={[GLOBAL_STYLES.flexRow,GLOBAL_STYLES.searchFieldContainer]}>
          <TextInput
            placeholder="Search"
            style={[GLOBAL_STYLES.searchField]}
          />
          <TouchableOpacity>
            <Icon name="x" size={20} color={COLORS.BLACK} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={[GLOBAL_STYLES.flexRow,{'marginVertical':15}]}>
        <TouchableOpacity style={[
          GLOBAL_STYLES.flexRow,
          GLOBAL_STYLES.greyButton
        ]}>
          <FAIcon name="calendar" size={10} color={COLORS.WHITE} />
          <Text style={[GLOBAL_STYLES.iconText]}>Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[GLOBAL_STYLES.flexRow,GLOBAL_STYLES.greyButton]}>
          <FAIcon name="users" size={10} color={COLORS.WHITE} />
          <Text style={[GLOBAL_STYLES.iconText]}>Preachers</Text>
        </TouchableOpacity>
      </View>
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
  const [header, setHeader] = React.useState(true)
  navigation.setOptions({
    headerLeft: () => <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{'marginRight': 15}}
    >
      <Icon name="home" size={20} color={COLORS.BLACK} />
  </TouchableOpacity>,
    headerRight: () => <Header headerSwitch={setHeader} />,
    headerShown: false,
  })

  const [playing, setPlaying] = React.useState(null)

  const renderItem = (item) => <Item {...item} playing={playing} setPlaying={setPlaying}/>

  return (
    <>
      <SearchHeader navigation={navigation}/>
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
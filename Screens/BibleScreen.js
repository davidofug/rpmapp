import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import RNFetchBlob from 'rn-fetch-blob';
import AudioRecorderPlayer, {
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
    AudioEncoderAndroidType,
    AudioSet,
    AudioSourceAndroidType
} from 'react-native-audio-recorder-player'

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
  const [player, setPlayer] = React.useState({
    isLogging: false,
    recordSecs: 0,
    recordTime: '00:00:00',
    currentPositionSec: 0,
    currentDurationSec: 0,
    playTime: '00:00:00',
    duration: '00:00:00',
  })
  const audioRecorderPlayer = new AudioRecorderPlayer();
  audioRecorderPlayer.setSubscriptionDuration(0.09);
  const dirs = RNFetchBlob.fs.dirs;

  const recordPath = Platform.select({
    ios: 'trial.m4a',
    android: `${dirs.CacheDir}/trial.mp3`,
  });

  const onStartRecord = async () => {
    /* if (Platform.OS === 'android') {
      try {
        const grants = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ]);

        console.log('write external stroage', grants);

        if (
          grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.READ_EXTERNAL_STORAGE'] ===
            PermissionsAndroid.RESULTS.GRANTED &&
          grants['android.permission.RECORD_AUDIO'] ===
            PermissionsAndroid.RESULTS.GRANTED
        ) {
          console.log('Permissions granted');
        } else {
          console.log('All required permissions not granted');
          return;
        }
      } catch (err) {
        console.warn(err);
        return;
      }
    }
 */
    const audioSet = {
      AudioEncorderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityIOSType: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.acc,
    };
    console.log('audioSet', audioSet);
    const uri = await audioRecorderPlayer.startRecorder(recordPath, audioSet);
    audioRecorderPlayer.addRecordBackListener((e) => {
      // console.log(e)
      setPlayer({
        ...player,
        recordSecs: e.currentPosition,
        recordTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
      });
    });

    console.log(`uri=${uri}`);
  }

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    setPlayer({
      ...player,
      recordSecs: 0,
    })
    console.log(result);
  }

  const onStartPlay = async (e) => {
    console.log('onStartPlay');
    // const path = 'sample.mp4';
    const msg = await audioRecorderPlayer.startPlayer(recordPath);
    audioRecorderPlayer.setVolume(1.0);
    audioRecorderPlayer.addPlayBackListener((e) => {
      if (e.currentPosition === e.duration) {
        console.log('finished');
        audioRecorderPlayer.stopPlayer();
      }
      setPlayer({
        ...player,
        currentPositionSec: e.currentPosition,
        currentDurationSec: e.duration,
        playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
      });
    });
  }

  onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
  }

  onStopPlay = async () => {
    console.log('onStopPlay');
    await audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
  }

  return (
    <>
      <View>
        <Text>{player.recordTime}</Text>
      </View>
    <View style={GLOBAL_STYLES.flatListFooter}>
      <TouchableOpacity onPress={()=> onStartRecord()}>
        <FAIcon name="microphone" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> onStopRecord()}>
        <FAIcon name="microphone-slash" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> onStartPlay()}>
        <FAIcon name="play" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> onPausePlay()}>
        <FAIcon name="pause" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> onStopPlay()}>
        <FAIcon name="stop" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FAIcon name="paperclip" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      <TouchableOpacity>
        <FAIcon name="paper-plane" size={20} color={COLORS.WHITE} />
      </TouchableOpacity>
      </View>
      </>
  )
}

const BibleScreen = ({ navigation }) => {
  const [header, setHeader] = React.useState(true)
  React.useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ 'marginRight': 15 }}
      >
        <Icon name="home" size={20} color={COLORS.BLACK} />
      </TouchableOpacity>,
      headerRight: () => <Header headerSwitch={setHeader} />,
      headerShown: header,
    })
  },[header]);

  const [playing, setPlaying] = React.useState(null)

  const renderItem = (item) => <Item {...item} playing={playing} setPlaying={setPlaying}/>

  return (
    <>
      {!header && <SearchHeader navigation={navigation} />}
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
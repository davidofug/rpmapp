import { Button, View, Text } from 'react-native'
import React, { useState } from 'react'
import YoutubePlayer from 'react-native-youtube-iframe';
const ServiceScreen = () => {
  const [playing, setPlaying] = useState(false);
  return (
    <View>
      <YoutubePlayer
        height={300}
        videoId={'AuiensiiIQA'}
        play={playing}
      />
      <Button onPress={() => setPlaying(!playing)} title={playing ? 'Pause' : 'Play'} />
    </View>
  )
}

export default ServiceScreen
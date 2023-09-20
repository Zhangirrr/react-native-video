import React from 'react';
import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

const VideoFile = ({route}) => {
  const {urlToVideo} = route.params;
  console.log(urlToVideo);

  
  return (
      <View>
        <Video
          source={{uri: urlToVideo}} // Can be a URL or a local file.
          // ref={player} // Store reference
          // onBuffer={this.onBuffer} // Callback when remote video is buffering
          // onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
          controls={true}
          resizeMode={'contain'}
          // fullscreen={true}
          // paused={true}
        />
      </View>
  );
};
export default VideoFile;

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 250,
    left: 0,
    bottom: 0,
    right: 0,
    width: 400,
    height: 250
  },
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center', 
  }
});

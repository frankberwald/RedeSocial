import { StyleSheet, Text, View, Image, ScrollView, StatusBar, TouchableOpacity, Vibration } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { posts } from './src/post';

export default function App() {
  return (
    <View style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <StatusBar backgroundColor='#999'/>
    <View>
        <View style={styles.header}>
          <Image
          style={styles.logo}
          source={require('./assets/logo.png')}/>
          <TouchableOpacity>
            <MaterialCommunityIcons name='chat-outline' size={30}/>
          </TouchableOpacity>
        </View>

      {posts.map((post) => (
        <View style={styles.fullPost}>
        <View>
        <View style={styles.headerPost}>
          <Text style={styles.usernameText}>{post.user}</Text>
          <MaterialCommunityIcons name='dots-horizontal' size={30}/>
        </View>
      </View>

      <Image
      style={styles.imagePost}
      source={{uri: post.image}}/>

      <View style={styles.footerPost}>
        <TouchableOpacity onPress={()=> Vibration.vibrate(500)}><MaterialCommunityIcons name='heart-outline' size={30}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> Vibration.vibrate(500)}><MaterialCommunityIcons name='chat-outline' size={30}/></TouchableOpacity>
        <TouchableOpacity onPress={()=> Vibration.vibrate(500)}><MaterialCommunityIcons name='share-outline' size={30}/></TouchableOpacity>
      </View>

      <View style={styles.postComment}>
        <Text style={styles.likesText}>{post.likes} likes</Text>
        <View style={styles.commentWrap}>
          <Text style={styles.commentText}>{post.caption}</Text>
        </View>
      </View>
    </View>
      ))

      }


    </View>
      </ScrollView>

    <View style={styles.appFooter}>
      <TouchableOpacity><MaterialCommunityIcons name='home-outline' size={30}/></TouchableOpacity>
      <TouchableOpacity><MaterialCommunityIcons name='magnify' size={30}/></TouchableOpacity>
      <TouchableOpacity><MaterialCommunityIcons name='plus-circle-outline' size={30}/></TouchableOpacity>
      <TouchableOpacity><MaterialCommunityIcons name='heart-outline' size={30}/></TouchableOpacity>
      <TouchableOpacity><MaterialCommunityIcons name='account-outline' size={30}/></TouchableOpacity>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo : {
    width: 50,
    height: 50,
  },
  scrollContent: {
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  fullPost: {
    marginBottom: 10
  },
  headerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  imagePost: {
    width: '100%',
    height: 300,
  },
  footerPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  postComment: {
    padding:10,
    borderTopColor: '#eee',
    borderTopWidth: 1,
  },
  likesText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  commentWrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  usernameText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
    marginRight: 5,
  },
  commentText: {
    fontSize: 14,
    color: '#333',
  },
  appFooter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    borderTopWidth : 1,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  }
});

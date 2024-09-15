import {Text, View, Image, TouchableOpacity, Vibration } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { posts } from '../src/post';
import { styles } from '../src/styles'


export default function Feed (){
  return (
    <View>
    {posts.map((post, index) => (
      <View key={index} style={styles.fullPost}>
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
    ))}
    </View>
  )
}

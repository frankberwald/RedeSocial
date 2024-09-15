import { View, Image, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { styles } from '../src/styles'

export default function Header () {
  return (
    <View>
        <View style={styles.header}>
          <Image
          style={styles.logo}
          source={require('../assets/logo.png')}/>
          <TouchableOpacity>
            <MaterialCommunityIcons name='chat-outline' size={30}/>
          </TouchableOpacity>
      </View>
    </View>
  )
}
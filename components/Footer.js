import {View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from '../src/styles'


export default function Footer () {
    return (
      <View style={styles.appFooter}>
        <TouchableOpacity><MaterialCommunityIcons name='home-outline' size={30}/></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons name='magnify' size={30}/></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons name='plus-circle-outline' size={30}/></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons name='heart-outline' size={30}/></TouchableOpacity>
        <TouchableOpacity><MaterialCommunityIcons name='account-outline' size={30}/></TouchableOpacity>
      </View>
    )
  }
import { View, ScrollView, StatusBar } from 'react-native';
import { styles } from '../RedeSocial/src/styles'
import Header from './components/Header';
import Feed from './components/Feed';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.safe}>
      <StatusBar backgroundColor='#999'/>
        <View style={styles.mainContent}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Header />
            <Feed />
          </ScrollView>
        </View>
      <Footer />
    </View>
  );
}
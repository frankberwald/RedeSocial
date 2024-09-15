import React, { useState } from 'react'
import { Text, View, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import style from '../src/loginStyles'

export default function App() {
  const [text, setText] = useState('Digite seu Usuário ou E-mail');
  const [password, setPassword] = useState('Digite sua senha');
  const [isSecure, setIsSecure] = useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.loginBackground}>
        <Image
          style={styles.mainImage}
          source={require('./assets/login.png')}
        />
        <View style={styles.credentials}>
            <TextInput
              style={styles.credentialsInput}
              onChangeText={setText}
              value={text}
              placeholder="Número, usuário ou e-mail"
            />
            <View style={styles.passwordInput}>
              <TextInput
                style={styles.credentialsInput}
                onChangeText={setPassword}
                value={password}
                placeholder="Senha"
                secureTextEntry={isSecure}
              />
              <TouchableOpacity
                  onPress={() => setIsSecure(!isSecure)}
                  style={styles.eyeIcon}
                >
                  <MaterialCommunityIcons
                    name={isSecure ? 'eye-off' : 'eye'}
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
        </View>
          <View style={styles.forgotContainer}>
            <TouchableOpacity style={styles.forgotPassword}><Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text></TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}><Text style={styles.loginText}>Entrar</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


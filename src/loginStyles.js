import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  loginBackground: {
    alignItems: 'center',
    margin: 200,
  },
  mainImage: {
    maxWidth: 400,
    maxHeight: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain'
  },
  credentials: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: 400,
    gap: 10
  },
  credentialsInput: {
    width: 400,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  eyeIcon: {
    position: 'absolute',
    right: 10
  },
  forgotContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  forgotPasswordText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#0297FB',
    fontWeight: 'bold'
  },
  forgotPassword: {
    width: 200,
    position: 'absolute',
    bottom: -30,
    left: 10
  },
  loginButton: {
    justifyContent:'center',
    alignItems: 'center',
    width: 400,
    margin: 80,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    backgroundColor: '#0297FB'
  },
  loginText: {
    fontSize: 20,
    color: '#fff'
  }
})

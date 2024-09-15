import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContent: {
    flex: 1,
  },
  logo : {
    width: 50,
    height: 50,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 60,
  },
  loginBackgroud: {
    backgroundColor: '#fff'
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

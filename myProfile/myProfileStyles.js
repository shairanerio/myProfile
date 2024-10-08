import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 13,
    paddingTop: 35,
  },
  darkContainer: {
    backgroundColor: '#333', //darkmode bg
  },
  lightContainer: {
    backgroundColor: '#fff', //lightmode bg
  },
  darkText: {
    color: '#fff', //text for darkmode
  },
  lightText: {
    color: '#000', //text for darkmode
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  backButton: {
    padding: 10,
    fontWeight: 'bold',
  },
  moreVertButton: {
    padding: 10,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRadius: 50,
    overflow: 'hidden',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 15,
    marginRight: 40,
    marginLeft: 15,
  },
  profileImage: {
    width: '98%',
    height: '98%',
    borderRadius: 100,
    marginTop: 1.53,
    marginLeft: 1,
  },
  detailsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  joinedText: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  nameSection: {
    marginTop: 10,
    marginLeft: 20,
  },
  firstNameText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  lastNameText: {
    fontSize: 30,
    fontWeight: 'normal',
    textAlign: 'left',
  },
  theprofileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 20,
  },
  theprofileUserText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  manageUserRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  manageUserDetailText: {
    marginRight: 100,
  },
  iconCircle: {
    backgroundColor: '#F8ABEB',
    borderRadius: 25,
    padding: 10,
    marginRight: 20,
  },
  settingsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    marginTop: 20,
  },
  settingsText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  notificationsRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  notificationsDetailText: {
    marginRight: 100,
  },
  darkmodeRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  darkmodeDetailText: {
    marginRight: 115,
  },
  signOutButton: {
    backgroundColor: '#F8ABEB',
    padding: 15,
    alignItems: 'center',
    marginTop: 65,
    borderRadius: 10,
    marginLeft: 21,
    marginRight: 200,
  },
  signOutButtonText: {
    fontSize: 18,
  },
});

export default styles;
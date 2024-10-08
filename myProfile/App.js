import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './myProfileStyles';

const myProfileScreen = ({ navigation }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  //darkmode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const localImage = require('./assets/me.jpg');

  return (
    <View style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      {/*navbar*/}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="chevron-left" size={24} color={isDarkMode ? "#fff" : "#000"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreVertButton}>
          <Icon name="more-vert" size={24} color={isDarkMode ? "#fff" : "#000"} />
        </TouchableOpacity>
      </View>

      {/*profile*/}
      <View style={styles.profileSection}>
        <View style={[styles.imageContainer, { shadowColor: isDarkMode ? '#F8ABEB' : '#000' }]}>
          <Image source={localImage} style={styles.profileImage} />
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Text style={[styles.joinedText, isDarkMode && styles.darkText]}>Joined</Text>
            <Text style={[styles.timeText, isDarkMode && styles.darkText]}>1 year ago</Text>
          </View>
        </View>
      </View>

      {/*name*/}
      <View style={styles.nameSection}>
        <Text style={[styles.firstNameText, isDarkMode && styles.darkText]}>Shaira Joy</Text>
        <Text style={[styles.lastNameText, isDarkMode && styles.darkText]}>Nerio</Text>
      </View>

      {/*manage user*/}
      <View style={styles.theprofileSection}>
        <Text style={[styles.theprofileUserText, isDarkMode && styles.darkText]}>Profile</Text>
      </View>
      <View style={styles.manageUserRight}>
        <View style={styles.iconCircle}>
          <FontAwesome name="dot-circle-o" size={20} color="#000" />
        </View>
        <Text style={[styles.manageUserDetailText, isDarkMode && styles.darkText]}>Manage User</Text>
        <View style={styles.iconCircle}>
          <Icon name="chevron-right" size={20} color="#000" />
        </View>
      </View>

      {/*settings*/}
      <View style={styles.settingsSection}>
        <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>Settings</Text>
      </View>
      <View style={styles.notificationsRight}>
        <View style={styles.iconCircle}>
          <FontAwesome name="bell-o" size={20} color="#000" />
        </View>
        <Text style={[styles.notificationsDetailText, isDarkMode && styles.darkText]}>Notifications</Text>
        <View style={styles.iconCircle}>
          <Icon name="chevron-right" size={20} color="#000" />
        </View>
      </View>

      {/*darkmode*/}
      <View style={styles.darkmodeRight}>
        <View style={styles.iconCircle}>
          <FontAwesome name="moon-o" size={20} color="#000" />
        </View>
        <Text style={[styles.darkmodeDetailText, isDarkMode && styles.darkText]}>Dark Mode</Text>
        <TouchableOpacity onPress={toggleDarkMode}>
          <View style={styles.iconCircle}>
            <Icon name={isDarkMode ? "toggle-on" : "toggle-off"} size={20} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

      {/*signout btn*/}
      <TouchableOpacity style={styles.signOutButton} onPress={() => console.log('Sign Out pressed')}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default myProfileScreen;
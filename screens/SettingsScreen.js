import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input, Button } from 'react-native-elements';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() { // My Palette
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}>
        <View>
        
          <ScrollView style={styles.container}>
      <Text style= {{ fontSize: 40, fontWeight: "bold"}}>
        Advocate
      </Text>
      <Text>
      Give a little info on the things you could use some help with 
      </Text>
      <Input placeholder="What lanuages can you speak?"/>
    <Input placeholder="What lanuages could you teach?"/>
    <Input placeholder="First Name"/>
    <Input placeholder="Last Name"/>
    <Input placeholder="Age"/>
    <Input placeholder="Profession/Field"/>
    <Input placeholder="randon question"/>
    <Input placeholder="Two Hobbies"/>

        
    </ScrollView>

    <Button
  onPress
  title="Submit"
  color="#841584"
/>


        </View>
      </ScrollView>

      
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});





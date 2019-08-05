import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View, ScrollView, Text, Input, TextInput, } from 'react-native';


const Questions = 'What Lanuage do you speak?'

export default class ButtonBasics extends Component {
  _onPressButton() {
    Alert.prompt(Questions, null, (text) =>
    console.log('You entered' + text),
    );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text>
            Advancing research and providing
            evidence on immigration and integration
            issues in communities across the U.S.
      </Text>
          <View style={styles.buttonContainer}>
            <Button onPress={this._onPressButton} title="Getting Started" />
          </View>
        </View>
      </ScrollView>
    );

function LoadQuestions() {

  {this._onPressButton}<View style>
  <ScrollView
    style={styles.container}
    contentContainerStyle={styles.contentContainer}>
    <View>
    
      <ScrollView style={styles.container}>
  <Text style= {{ fontSize: 40, fontWeight: "bold"}}>
    Loophole
  </Text>
  <Text>
  Give a little info on the things you could use help with. 
  </Text>
<MyView>
    <Input placeholder="what lanuage do you speak?"/>
    <Input placeholder="What lanuage would you like to learn?"/>
    <Input placeholder="A issue you've been having?"/>
    <Input placeholder="randon question"/>
    <Input placeholder="Two Hobbies"/>
    {/* other stuff would go here */}
</MyView>
    
</ScrollView>


    </View>
  </ScrollView>
  </View>
}
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ScrollView: {
    alignContent: 'center',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
});
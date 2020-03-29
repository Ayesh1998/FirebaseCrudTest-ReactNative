import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase";

export default function App() {
  useEffect(() => {
    var firebaseConfig = {
      apiKey: "AIzaSyD6VfJQ9YKOrzsF441Fx_uDob2ysCZX8Sw",
      authDomain: "reactnativecrudtestapp.firebaseapp.com",
      databaseURL: "https://reactnativecrudtestapp.firebaseio.com",
      projectId: "reactnativecrudtestapp",
      storageBucket: "reactnativecrudtestapp.appspot.com",
      messagingSenderId: "518833408660",
      appId: "1:518833408660:web:4d4bf606c7ffa6d1838281",
      measurementId: "G-Q12CZX94J9"
    };

    firebase.initializeApp(firebaseConfig);

    console.log(firebase);
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Notifications } from "expo";

export default class App extends React.Component {
  componentDidMount() {
    this.setNotification();
  }

  setNotification = async () => {
    let t = new Date();
    t.setSeconds(t.getSeconds() + 10);
    let notificationId = Notifications.scheduleLocalNotificationAsync(
      {
        title: "Notification title",
        body: "This is the notification message"
      },
      {
        time: Number(t)
      }
    );
    console.log("The timestamp for that alert is: " + t);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

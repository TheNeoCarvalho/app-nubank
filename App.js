import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://scontent-for1-1.cdninstagram.com/v/t51.2885-19/57511932_2694824357256408_6013343935437471744_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=gakpHu-dd90AX8Yq0X2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBy4OnqvLAo3uIGsTvJ57PfLxzqDntL7s0rendevnuFBA&oe=65E12E28&_nc_sid=8b3546",
            }}
          />
        </View>
        <Text>Olá, Manoel</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: "#9c44dc",
    width: "100%",
    height: 200,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

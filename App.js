import { AntDesign, Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.contentHeader}>
          <Image
            style={styles.avatarHeader}
            source={{
              uri: "https://scontent-for1-1.cdninstagram.com/v/t51.2885-19/57511932_2694824357256408_6013343935437471744_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-for1-1.cdninstagram.com&_nc_cat=100&_nc_ohc=gakpHu-dd90AX8Yq0X2&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBy4OnqvLAo3uIGsTvJ57PfLxzqDntL7s0rendevnuFBA&oe=65E12E28&_nc_sid=8b3546",
            }}
          />
          <View style={styles.iconsHeader}>
            <Feather name="eye" color="white" size={22} />
            <AntDesign name="questioncircleo" size={22} color="white" />
            <Feather name="user" size={22} color="white" />
          </View>
        </View>
        <Text style={styles.textHeader}>Olá, Manoel</Text>
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
  avatarHeader: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  iconsHeader: {
    flexDirection: "row",
    gap: 12,
  },
  textHeader: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

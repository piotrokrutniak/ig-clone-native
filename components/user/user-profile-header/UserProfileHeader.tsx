import { User } from "@/data/types";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

export const UserProfileHeader = ({ user }: { user: User }) => {
  return (
    <View style={styles.header}>
      <Avatar.Image size={120} source={{ uri: "" }} style={styles.avatar}/>
      <Text style={[styles.headerText, styles.name]}>{user?.name}</Text>
      <Text style={[styles.headerText, styles.subText]}>@{user?.username}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    rowGap: 4,
    padding: 16,
  },
  avatar: {
    alignSelf: "center",
  },
  headerText: {
    textAlign: "center",
    color: "white",
  },
  subText: {
    fontSize: 16,
    opacity: 0.7,
  },
  midText: {
    marginTop: 8,
    fontSize: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "700"
  }
});
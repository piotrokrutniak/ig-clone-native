import { useUserById } from "@/data/react-query/useUserById";
import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Avatar } from "react-native-paper";

export const UserHeader = ({ userId }: { userId: number }) => {
  const user = useUserById(userId);

  return (
    <View style={styles.header}>
      <Link href={`/user/${userId}`}>
        <View>
          <Text>{user?.name}</Text>
          <Text style={styles.email}>@{user?.username}</Text>
        </View>
      </Link>
      <Link href={`/user/${userId}`}>
        <Avatar.Image size={40} source={{ uri: "https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png" }} />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  email: {
    opacity: 0.7,
  }
});
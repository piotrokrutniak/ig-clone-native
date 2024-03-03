import { useUserById } from "@/data/react-query/useUserById";
import { Text, View } from "../Themed";
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

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
        <Text>Avatar</Text>
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
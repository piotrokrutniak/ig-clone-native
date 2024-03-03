import { View } from "@/components/Themed";
import { UserHeader } from "@/components/reusable-components/UserHeader";
import { Post } from "@/data/types";
import { useThemeColors } from "@/utilities/themes/useThemeColors";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import { Card, Text } from "react-native-paper";

export const PostCard = ({ post }: { post: Post }) => {
  const {} = useThemeColors();

  return (
    <View style={styles.card}>
        <UserHeader userId={post.userId} />
        <Link href={`/post/${post.id}`} asChild>
          <View style={styles.body}>
            <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
            <Text style={styles.content}>{post.body}</Text>
          </View>
        </Link>
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    maxWidth: "100%",
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  body: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  content: {
    color: "white",
  },
  card: {
    display: "flex",
    rowGap: 16,
    padding: 16,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    color: "white",
  }
});



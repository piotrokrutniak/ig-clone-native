import { View } from "@/components/Themed";
import { ActionButton } from "@/components/reusable-components/ActionButton";
import { UserHeader } from "@/components/reusable-components/UserHeader";
import { Post } from "@/data/types";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const PostCard = ({
  post,
  setActiveId,
}: {
  post: Post;
  setActiveId: (id: number) => void;
}) => {
  const [isLiked, setIsLiked] = useState(false);
  
  const setActiveComments = () => {
    setActiveId(post.id);
  };

  const toggleLiked = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <View style={styles.card}>
      <UserHeader userId={post.userId} />
        <View style={styles.body}>
        <Link href={`/post/${post.id}`} asChild>
          <Text style={styles.title} numberOfLines={1}>
            {post.title}
          </Text>
          </Link>
          <Link href={`/post/${post.id}`} asChild>
          <Text style={styles.content}>{post.body}</Text>
          </Link>
        </View>
      <View style={styles.actions}>
        <ActionButton
          icon={
            <MaterialIcons
              name="thumb-up"
              size={24}
              color={isLiked ? "blue" : "white"}
            />
          }
          label="Like"
          onTouch={toggleLiked}
        />
        <ActionButton
          icon={<MaterialIcons name="comment" size={24} color="white" />}
          label="Comments"
          onTouch={setActiveComments}
        />
      </View>
    </View>
  );
};

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
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    color: "white",
    gap: 8,
  },
  actionLabel: {
    color: "white",
    fontSize: 16,
  },
  modal: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 8,
    zIndex: 1000,
  },
});

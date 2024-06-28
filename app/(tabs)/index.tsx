import { ScrollView, StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import { usePosts } from "@/data/react-query/usePosts";
import { PostsList } from "@/components/home/posts-list/PostsList";
import { Post } from "@/data/types";

export default function TabOneScreen() {
  // TODO: Move this to PostsList to avoid unnecessary re-renders.
  // TODO: Update usePosts to support infinite scroll.
  const { posts } = usePosts();

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps>
        <PostsList posts={posts || ([] as Post[])} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

import { StyleSheet } from 'react-native';
import { usePosts } from "@/data/react-query/usePosts";
import { Post } from "@/data/types";
import { View } from "react-native";
import { PostCard } from './post-card/PostCard';

const styles = StyleSheet.create({
  postsContainer: {
    display: 'flex',
    rowGap: 8,
    paddingHorizontal: 4
  }
});

export const PostsList = () => {
  const { posts } = usePosts();

  return (
    <View style={styles.postsContainer}>
      {posts && posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </View>
  );
}

import { StyleSheet } from 'react-native';
import { Post } from "@/data/types";
import { View } from "react-native";
import { PostCard } from './post-card/PostCard';
import ModalScreen from '@/app/modal';

const styles = StyleSheet.create({
  postsContainer: {
    display: 'flex',
    rowGap: 8,
    paddingHorizontal: 4
  }
});

export const PostsList = ({ posts }: { posts: Post[] }) => {
  return (
    <View style={styles.postsContainer}>
      {posts && posts.map((post: Post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <ModalScreen id={"1"} />
    </View>
  );
}

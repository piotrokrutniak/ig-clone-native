import { StyleSheet } from 'react-native';
import { Post } from "@/data/types";
import { View } from "react-native";
import { PostCard } from './post-card/PostCard';
import { useEffect, useState } from 'react';
import { CommentsModal } from './comments-modal/CommentsModal';

export const PostsList = ({ posts }: { posts: Post[] }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeId, setActiveId] = useState<number>();

  useEffect(() => {
    activeId ? setModalVisible(true) : setModalVisible(false);
  }, [activeId]);

  return (
    <>
      <View style={styles.postsContainer}>
        {posts && posts.map((post: Post) => (
          <PostCard key={post.id} post={post} setActiveId={setActiveId} />
          ))}
      </View>
      <CommentsModal modalVisible={modalVisible} closeModal={() => activeId && setActiveId(undefined)} />
    </>
  );
}

const styles = StyleSheet.create({
  postsContainer: {
    display: 'flex',
    rowGap: 8,
    paddingHorizontal: 4
  },
  pressable: {
    backgroundColor: 'blue',
    color: 'white',
    padding: 32,
  }
});
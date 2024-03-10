import { StyleSheet } from "react-native";
import { Post } from "@/data/types";
import { View } from "react-native";
import { PostCard } from "./post-card/PostCard";
import { useEffect, useState } from "react";
import { CommentsModal } from "./comments-modal/CommentsModal";
import { CreatePostForm } from "./create-post-form/CreatePostForm";
import { postPost } from "@/data/json-api/postPost";

export const PostsList = ({ posts }: { posts: Post[] }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeId, setActiveId] = useState<number>();
  const [fakePosts, setFakePosts] = useState<Post[]>([]);

  useEffect(() => {
    if (posts) {
      setFakePosts([...posts]);
    }
  }, [posts]);

  useEffect(() => {
    activeId ? setModalVisible(true) : setModalVisible(false);
  }, [activeId]);

  const addPost = async (post: Post) => {
    console.log("addPost", post);
    const newPost = await postPost(post);
    setFakePosts([newPost, ...fakePosts]);
  };

  return (
    <>
      <View style={styles.postsContainer}>
        <CreatePostForm addPost={addPost} />
        {fakePosts &&
          fakePosts.map((post: Post) => (
            <PostCard key={post.id} post={post} setActiveId={setActiveId} />
          ))}
      </View>
      {activeId && (
        <CommentsModal
          modalVisible={modalVisible}
          closeModal={() => activeId && setActiveId(undefined)}
          postId={activeId}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    display: "flex",
    rowGap: 8,
    paddingHorizontal: 4,
  },
  pressable: {
    backgroundColor: "blue",
    color: "white",
    padding: 32,
  },
});

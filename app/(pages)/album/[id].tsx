import { Text, View } from "@/components/Themed";
import { CommentsModal } from "@/components/home/posts-list/comments-modal/CommentsModal";
import { ActionButton } from "@/components/reusable-components/ActionButton";
import { GallerySlider } from "@/components/reusable-components/GallerySlider";
import { ImageCover } from "@/components/reusable-components/ImageCover";
import { usePostById } from "@/data/react-query/usePostById";
import { MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const PostPage = () => {
  const [displayedSrc, setDisplayedSrc] = useState<string>("");
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [activeId, setActiveId] = useState<number | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const { id } = useLocalSearchParams();
  const { post } = usePostById(parseInt(id.toString()));

  const setActiveComments = () => {
    setActiveId(post.id);
  };

  const toggleLiked = () => {
    setIsLiked((prev) => !prev);
  };

  const handleClick = (index: number) => {
    setImageIndex(index);
  };

  useEffect(() => {
    activeId ? setModalVisible(true) : setModalVisible(false);
  }, [activeId]);

  useEffect(() => {
    setDisplayedSrc((post?.photos && post?.photos[imageIndex]?.url) || "");
  }, [post]);

  return (
    <View style={styles.headerSection}>
      <ImageCover url={displayedSrc} />
      <GallerySlider
        mainIndex={imageIndex}
        photos={post?.photos || []}
        setImageIndex={handleClick}
      />
      <Text style={styles.title}>{post?.title}</Text>
      <Text>{post?.body}</Text>
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
      {activeId && (
        <CommentsModal
          modalVisible={modalVisible}
          closeModal={() => activeId && setActiveId(undefined)}
          postId={activeId}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerSection: {
    display: "flex",
    rowGap: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  actions: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default PostPage;

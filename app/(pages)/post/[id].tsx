import { Text, View } from "@/components/Themed";
import { GallerySlider } from "@/components/reusable-components/GallerySlider";
import { ImageCover } from "@/components/reusable-components/ImageCover";
import { usePostById } from "@/data/react-query/usePostById";
import { Photo } from "@/data/types";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const PostPage = () => {
  const { id } = useLocalSearchParams();
  const { post } = usePostById(parseInt(id.toString()));

  const [displayedSrc, setDisplayedSrc] = useState<string>("");
  const [imageIndex, setImageIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setImageIndex(index);
  };

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
});

export default PostPage;

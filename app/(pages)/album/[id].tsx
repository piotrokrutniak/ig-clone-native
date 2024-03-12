import { Text, View } from "@/components/Themed";
import { GallerySlider } from "@/components/reusable-components/GallerySlider";
import { ImageCover } from "@/components/reusable-components/ImageCover";
import { useAlbumById } from "@/data/react-query/useAlbumById";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

const AlbumPage = () => {
  const [displayedSrc, setDisplayedSrc] = useState<string>("");
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { id } = useLocalSearchParams();

  const { album } = useAlbumById(parseInt(id.toString()));

  const handleClick = (index: number) => {
    setImageIndex(index);
  };

  useEffect(() => {
    setDisplayedSrc((album?.photos && album?.photos[imageIndex]?.url) || "");
  }, [album]);

  return (
    <View style={styles.headerSection}>
      <ImageCover url={displayedSrc} />
      <GallerySlider
        mainIndex={imageIndex}
        photos={album?.photos || []}
        setImageIndex={handleClick}
      />
      <Text style={styles.title}>{album?.title}</Text>
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

export default AlbumPage;

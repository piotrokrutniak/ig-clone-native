import { Photo } from "@/data/types";
import { ScrollView, Pressable, Image, StyleSheet } from "react-native";

export const GallerySlider = ({
  mainIndex,
  photos,
  setImageIndex,
}: {
  mainIndex: number;
  photos: Photo[];
  setImageIndex: (value: number) => void;
}) => {
  return (
    <ScrollView horizontal>
      {photos.map((photo: Photo, index: number) => (
        <Pressable key={photo.id} onPress={() => setImageIndex(index)}>
          <Image
            source={{ uri: photo.thumbnailUrl }}
            style={[styles.thumbnail, index === mainIndex && styles.selected]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnail: {
    width: 75,
    height: 75,
    opacity: 0.8,
  },
  selected: {
    opacity: 1,
    borderWidth: 1,
    borderColor: "white",
  },
});

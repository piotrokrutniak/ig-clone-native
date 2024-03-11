import { useUserAlbums } from "@/data/react-query/useUserAlbums";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export const GalleryView = ({ userId }: { userId: number }) => {
  const albums = useUserAlbums(userId);

  return (
    <FlatList
      style={styles.gallery}
      numColumns={3}
      data={albums}
      renderItem={({ item }) => (
        <Link href={`/album/${item.id}`} style={styles.square}>
          <View style={styles.square}>
            <Text>{item.id}</Text>
          </View>
        </Link>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gallery: {
    overflow: "scroll",
  },
  gridContainer: {
    flex: 4,
    flexDirection: "column",
    flexWrap: "wrap",
    height: 500,
    minHeight: 500,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    margin: 5,
  },
});

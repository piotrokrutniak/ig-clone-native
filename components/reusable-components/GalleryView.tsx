import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"

export const GalleryView = () => {
  const array = Array.from({ length: 16 }, (_, index) => index);
  return (
    <FlatList style={styles.gallery} numColumns={3} data={array} renderItem={({ item }) => (
      <View style={styles.square} >
        <Text>{item}</Text>
      </View>
    )} />
  )
}

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


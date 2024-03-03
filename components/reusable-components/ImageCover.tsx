import { Image, StyleSheet, View } from "react-native"

export const ImageCover = ({ url }: { url: string }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: url }} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 1
  },
  card: {
    width: "100%",
    aspectRatio: 1,
    backgroundColor: "white"
  },
})
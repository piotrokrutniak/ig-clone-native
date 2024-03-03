import { Text, View } from "@/components/Themed";
import { usePostById } from "@/data/react-query/usePostById";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const PostPage = () => {
  const { id } = useLocalSearchParams();
  const { post } = usePostById(parseInt(id.toString()));
  // TODO: handle default states
  return (
    <View>
      <Text>Post {id}</Text>
      {<Cover url={post?.photos && post?.photos[0]?.url || ""} />}
      <Text>{post?.photos && post?.photos[0]?.url}</Text>
      <Text style={styles.title}>{post?.title}</Text>
      <Text>{post?.body}</Text>
    </View>
  )
}

// TODO: Move to resusable components
const Cover = ({ url }: { url: string }) => {
  return (
    <Card>
      <Card.Cover source={{ uri: url }} />
    </Card>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default PostPage;
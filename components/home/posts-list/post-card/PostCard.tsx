import { Post } from "@/data/types";
import { Link } from "expo-router";
import { Card, Text } from "react-native-paper";

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`/post/${post.id}`} asChild>
      <Card>
        <Card.Title title={post.title} subtitle={post.userId} />
        <Card.Content>
          <Text>{post.body}</Text>
        </Card.Content>
      </Card>
    </Link>
  );
}

// `/post/${post.id}`
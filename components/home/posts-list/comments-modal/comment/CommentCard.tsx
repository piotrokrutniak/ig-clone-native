import { Text } from "@/components/Themed";
import { useUserContext } from "@/components/contexts/user-context/UserContext";
import { UserHeader } from "@/components/reusable-components/UserHeader";
import { Comment } from "@/data/types";
import { StyleSheet, View } from "react-native";

export const CommentCard = ({ comment }: { comment: Comment }) => {
  const { user: { email } } = useUserContext();

  return (
    <View style={styles.commentForm}>
      <Text style={[styles.text, styles.userName]}>{comment.email + (comment.email === email ? " (you)" : "")}</Text>
      <Text style={[styles.text, styles.title]}>{comment.name}</Text>
      <Text style={[styles.text, styles.body]}>{comment.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  commentForm: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 8,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  text: {
    color: "white",
  },
  userName: {
    fontSize: 12,
    opacity: 0.6,
    fontWeight: "600",
  },
  title: {
    fontSize: 16,
  },
  body: {
    fontSize: 16,
    fontWeight: "300",
  }
});
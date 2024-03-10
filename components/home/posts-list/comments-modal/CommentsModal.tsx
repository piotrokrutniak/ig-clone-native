import { FlatList, Modal, StyleSheet, View } from "react-native"
import { CommentsModalHeader } from "./header/CommentsHeaderModal";
import { usePostComments } from "@/data/react-query/usePostComments";
import { CommentCard } from "./comment/CommentCard";
import { CommentForm } from "./comment-form/CommentForm";
import { Comment } from "@/data/types";
import { useEffect, useState } from "react";
import { postPostComment } from "@/data/json-api/postPostComment";

export const CommentsModal = ({ postId, modalVisible, closeModal}: {
  postId: number,
  modalVisible: boolean, 
  closeModal: () => void
}) => {
  const { comments } = usePostComments(postId);
  const [fakeComments, setFakeComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (comments) {
      setFakeComments([...comments]);
    }
  }, [comments]);

  const addComment = async (comment: Comment) => {
    console.log("Posting comment");
    const newComment = await postPostComment(comment);
    setFakeComments([...fakeComments, newComment]);
  }

  return (
    <Modal visible={modalVisible} animationType="slide" >
      <View style={styles.modalContainer}>
        <CommentsModalHeader closeModal={closeModal} />
        <View style={styles.commentsSection}>
          <FlatList
            data={fakeComments}
            renderItem={(comment) => <CommentCard comment={comment.item} />}
            contentContainerStyle={styles.commentsList}
          />
        </View>
        <CommentForm postId={postId} addComment={addComment}/>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    display: "flex",
    backgroundColor: "black",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  commentsSection: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 16,
  },
  commentsList: {
    rowGap: 16,
  },
  text: {
    color: "white",
  }
});
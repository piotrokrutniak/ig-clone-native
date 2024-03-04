import { FlatList, Modal, StyleSheet, Text, View, VirtualizedList } from "react-native"
import { CommentsModalHeader } from "./header/CommentsHeaderModal";
import { usePostComments } from "@/data/react-query/usePostComments";
import { CommentCard } from "./comment/CommentCard";

export const CommentsModal = ({modalVisible, closeModal}: {modalVisible: boolean, closeModal: () => void}) => {
  const array = Array.from({length: 10}).map((_, i) => i);
  const { comments } = usePostComments(1);

  return (
    <Modal visible={modalVisible} animationType="slide" >
      <View style={styles.modalContainer}>
        <CommentsModalHeader closeModal={closeModal} />
        <View style={styles.commentsSection}>
          <FlatList
            data={comments}
            renderItem={(comment) => <CommentCard comment={comment.item} />}
            contentContainerStyle={styles.commentsList}
          />
        </View>
        <View style={styles.commentForm}>
          {
            // TODO: Add comment form
          }
        </View>
      </View>
    </Modal>
  )
}

// TODO: Make the commentForm respond to keyboard position

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
  commentForm: {
    borderWidth: 1,
    borderColor: "white",
    height: 128,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
  },
  text: {
    color: "white",
  }
});
import { FlatList, Modal, StyleSheet, Text, TextInput, View } from "react-native"
import { CommentsModalHeader } from "./header/CommentsHeaderModal";
import { usePostComments } from "@/data/react-query/usePostComments";
import { CommentCard } from "./comment/CommentCard";
import { Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useUserContext } from "@/components/contexts/user-context/UserContext";

export const CommentsModal = ({modalVisible, closeModal}: {modalVisible: boolean, closeModal: () => void}) => {
  const { comments } = usePostComments(1);
  const { user } = useUserContext();

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
          <TextInput
            placeholder={"Add a comment"}
            style={[styles.commentInput, styles.text]}
            placeholderTextColor="gray"
          />
          <Button 
            style={styles.commentButton} 
            contentStyle={styles.commentButtonLabel} 
            rippleColor={"gray"}
            onPress={() => {}}
          >
            <MaterialIcons name="send" size={23} color="white" />
          </Button>
        </View>
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
  commentForm: {
    paddingVertical: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 8,
  },
  commentButton: {
    borderRadius: 8,
  },
  commentButtonLabel: {
    height: 46,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray",
    backgroundColor: "black",
    padding: 0,
  },
  text: {
    color: "white",
  }
});
import { FlatList, Modal, StyleSheet, View, VirtualizedList } from "react-native"
import { CommentsModalHeader } from "./header/CommentsHeaderModal";

export const CommentsModal = ({modalVisible, closeModal}: {modalVisible: boolean, closeModal: () => void}) => {
  const array = Array.from({length: 10}).map((_, i) => i);

  return (
    <Modal visible={modalVisible} animationType="slide" >
      <View style={styles.modalContainer}>
        <CommentsModalHeader closeModal={closeModal} />
        <View style={styles.commentsSection}>
          <FlatList
            data={array}
            renderItem={() => <View style={styles.commentForm}></View>}
          />
        </View>
        <View style={styles.commentForm}>
          

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
    padding: 16,
  },
  commentsSection: {
    borderWidth: 1,
    borderColor: "white",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 16,
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
});
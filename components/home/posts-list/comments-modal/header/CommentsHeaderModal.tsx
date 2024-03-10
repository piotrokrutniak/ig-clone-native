import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const CommentsModalHeader = ({
  closeModal,
}: {
  closeModal: () => void;
}) => {
  return (
    <View style={styles.modalHeader}>
      <View style={styles.dummyContainer}></View>
      <Text style={styles.headerText}>Comments</Text>
      <Pressable onPress={closeModal}>
        <MaterialIcons name="close" size={32} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  modalHeader: {
    paddingVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dummyContainer: {
    width: 32,
    height: 32,
  },
  headerText: {
    color: "white",
    fontSize: 18,
    alignSelf: "center",
  },
});

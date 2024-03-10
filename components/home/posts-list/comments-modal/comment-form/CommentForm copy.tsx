import { useUserContext } from "@/components/contexts/user-context/UserContext";
import { MaterialIcons } from "@expo/vector-icons";
import { Form } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";

export const CommentForm = () => {
  const { user } = useUserContext();

  return (
    <Form>
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
          <Text style={styles.text}>Add Comment</Text>
          <MaterialIcons name="send" size={23} color="white" />
        </Button>
      </View>
    </Form>
  );
};

const styles = StyleSheet.create({
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
  },
});

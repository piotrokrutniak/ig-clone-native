import { useUserContext } from "@/components/contexts/user-context/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { CreatePostFormInput } from "./create-post-form-input/CreatePostFormInput";
import { postPost } from "@/data/json-api/postPost";
import { Post } from "@/data/types";
import { useEffect } from "react";

const schema = z.object({
  id: z.number().min(0),
  userId: z.number().min(0),
  title: z.string().min(1),
  body: z.string(),
});

type FormData = z.infer<typeof schema>;

export const CreatePostForm = ({
  addPost,
}: {
  addPost: (value: Post) => void;
}) => {
  const { user } = useUserContext();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: 0,
      userId: user.id,
      title: "",
      body: "",
    },
  });

  const onSubmit = (data: FormData) => {
    if (data.userId !== user.id) {
      data.userId = user.id;
    }
    addPost(data);
    reset();
  };

  return (
    <View style={styles.createPostForm}>
      <Controller
        control={control}
        name="title"
        render={({ field: { onChange, onBlur, value } }) => (
          <CreatePostFormInput
            placeholder="Enter title here"
            name="title"
            errors={errors}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Controller
        control={control}
        name="body"
        render={({ field: { onChange, onBlur, value } }) => (
          <CreatePostFormInput
            placeholder="What's on your mind?"
            name="body"
            errors={errors}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <Button
        style={styles.commentButton}
        contentStyle={styles.commentButtonLabel}
        rippleColor={"gray"}
        onPress={handleSubmit(onSubmit)}
      >
        <View style={styles.label}>
          <Text style={styles.text}>Add Post</Text>
          <MaterialIcons name="post-add" size={20} color="white" />
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  createPostForm: {
    paddingVertical: 8,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  commentButton: {
    borderRadius: 8,
  },
  commentButtonLabel: {
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "black",
    padding: 0,
  },
  text: {
    color: "white",
  },
  label: {
    flexDirection: "row",
    gap: 8,
  },
});

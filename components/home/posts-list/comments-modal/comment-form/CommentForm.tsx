import { useUserContext } from "@/components/contexts/user-context/UserContext";
import { MaterialIcons } from "@expo/vector-icons"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { Button } from "react-native-paper"
import React, { useEffect, useRef, useState } from 'react';
import { Control, Controller, FieldErrors, Noop, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Comment } from "@/data/types";

// type Comment = {
//   id: number;
//   postId: number;
//   name: string;
//   email: string;
//   body: string;
// }

const schema = z.object({
  id: z.number().min(0),
  postId: z.number().min(0),
  name: z.string().min(1),
  body: z.string(),
  email: z.string().email(),
});

type FormData = z.infer<typeof schema>;

export const CommentForm = ({ postId, addComment }: { postId: number, addComment: (value: Comment) => void}) => {
  const { user } = useUserContext();
  const { handleSubmit, formState: { errors }, getValues, control, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      id: 0,
      postId: postId,
      name: "",
      body: "",
      email: user.email,
    },
  });

  const onSubmit = (data: FormData) => {
    addComment(data as Comment);
    reset();
  };

  return (
    <View style={styles.commentForm}>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput 
            placeholder="Enter title here" 
            name="name" 
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
          <FormInput 
            placeholder="Enter comment here" 
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
          <Text style={styles.text}>Add Comment</Text>
          <MaterialIcons name="send" size={20} color="white" />
        </View>
      </Button>
    </View>
  )
}

// TODO: Move to a separate file, implement form context, add generic T to the form fields
const FormInput = ({ placeholder, name, value, onChange, onBlur, errors }: { 
  placeholder: string;
  name: "name" | "body";
  value: string;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  errors: FieldErrors<{
    name: string;
    body?: string;
    email: string;
  }>;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const focusHandler = () => {
    setIsFocused(true);
    inputRef.current?.focus();
  };

  const blurHandler = () => {
    setIsFocused(false);
    onBlur();
    inputRef.current?.blur();
  };

  const onChangeHandler = (e: any) => {
    onChange(e.nativeEvent.text);
  };

  return(
    <View style={styles.formRow}>
        <TextInput
          id={name}
          ref={inputRef}
          value={value}
          placeholder={placeholder}
          style={[styles.commentInput, isFocused && styles.commentInputFocused, styles.text]}
          onChange={onChangeHandler}
          onFocus={focusHandler}
          onBlur={blurHandler}
          blurOnSubmit={true}
          placeholderTextColor="gray"
        />
      {errors[name] && <Text style={styles.errorText}>{errors[name]?.message}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  commentForm: {
    paddingVertical: 8,
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  formRow: {
    marginBottom: 20,
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 8,
    minHeight: 46,
  },
  commentInputFocused: {
    borderColor: "white",
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
  errorText: {
    color: "red",
    textAlign: "right"
  },
  label: {
    flexDirection: "row",
    gap: 8,
  }
});
import { FieldErrors, Noop } from "react-hook-form";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useRef, useState } from "react";

export const CreatePostFormInput = ({
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  errors,
}: {
  placeholder: string;
  name: "title" | "body";
  value: string;
  onChange: (...event: any[]) => void;
  onBlur: Noop;
  errors: FieldErrors<{
    title: string;
    body?: string;
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

  return (
    <View style={styles.formRow}>
      <TextInput
        id={name}
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        style={[
          styles.commentInput,
          isFocused && styles.commentInputFocused,
          styles.text,
        ]}
        onChange={onChangeHandler}
        onFocus={focusHandler}
        onBlur={blurHandler}
        blurOnSubmit={true}
        placeholderTextColor="gray"
      />
      {errors[name] && (
        <Text style={styles.errorText}>{errors[name]?.message}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formRow: {
    // marginBottom: 20,
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
  text: {
    color: "white",
  },
  errorText: {
    color: "red",
    textAlign: "right",
  },
});

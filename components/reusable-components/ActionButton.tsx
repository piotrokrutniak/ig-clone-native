import { Pressable, StyleSheet, Text } from "react-native";

export const ActionButton = ({
  icon,
  label,
  onTouch,
}: {
  icon: React.ReactNode;
  label: string;
  onTouch?: () => void;
}) => {
  return (
    <Pressable style={styles.actionButton} onPress={onTouch}>
      {icon}
      <Text style={styles.actionLabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    display: "flex",
    flexDirection: "row",
    padding: 8,
    color: "white",
    gap: 8,
  },
  actionLabel: {
    color: "white",
    fontSize: 16,
  }
});
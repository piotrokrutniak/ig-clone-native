import { Text } from "@/components/Themed";
import { StyleSheet, View } from "react-native";

export const InfoRow = ({
  label,
  value,
}: {
  label: string;
  value?: string;
}) => {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value || "-"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    opacity: 0.7,
  },
  value: {
    fontWeight: "bold",
  },
});

import { StyleSheet, Text, View } from "react-native";
import Collapsible from "react-native-collapsible";
import { ReactNode, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const CollapsibleSection = ({
  sectionName,
  children,
}: {
  sectionName: string;
  children?: ReactNode;
}) => {
  const [isSectionCollapsed, setIsSectionCollapsed] = useState(true);

  return (
    <View style={styles.infoSection}>
      <View
        style={styles.header}
        onTouchEnd={() => setIsSectionCollapsed(!isSectionCollapsed)}
      >
        <Text style={styles.headerText}>
          {isSectionCollapsed ? "Show" : "Hide"} {sectionName}{" "}
        </Text>
        <MaterialIcons
          name="keyboard-arrow-down"
          size={24}
          style={[styles.arrow, !isSectionCollapsed && styles.rotated]}
        />
      </View>
      <Collapsible style={styles.collapsible} collapsed={isSectionCollapsed}>
        {children}
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  infoSection: {
    display: "flex",
    rowGap: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "white",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    fontSize: 16,
    opacity: 0.9,
  },
  arrow: {
    color: "white",
  },
  rotated: {
    transform: [{ rotate: "180deg" }],
  },
  headerText: {
    textAlignVertical: "center",
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  collapsible: {
    display: "flex",
    rowGap: 4,
    padding: 16,
  },
});

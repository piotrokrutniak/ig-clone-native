import { User } from "@/data/types"
import { StyleSheet, View } from "react-native";
import { InfoRow } from "./info-row/InfoRow";

export const InfoSection = ({ user }: { user: User }) => {
  user.phone

  return (
    <View style={styles.infoSection}>
      <InfoRow label="Email" value={user.email} />
      <InfoRow label="Phone" value={user.phone} />
      <InfoRow label="Website" value={user.website} />
      <InfoRow label="Company" value={user.company?.name} />
      <InfoRow label="City" value={user.address?.city} />
      <InfoRow label="Street" value={user.address?.street} />
      <InfoRow label="Suite" value={user.address?.suite} />
      <InfoRow label="Zipcode" value={user.address?.zipcode} />
    </View>
  )
}

const styles = StyleSheet.create({
  infoSection: {
    display: "flex",
    rowGap: 16,
    padding: 16,
  },
  descRow: {
    fontSize: 16,
    opacity: 0.9,
  }
});
import { User } from "@/data/types"
import { StyleSheet, Text, View } from "react-native";
import { InfoRow } from "./info-row/InfoRow";
import { CollapsibleSection } from "@/components/reusable-components/CollapsibleSection";
import { GalleryView } from "@/components/reusable-components/GalleryView";

export const InfoSection = ({ user }: { user: User }) => {
  
  return (
    <View style={styles.infoSection}>
      <CollapsibleSection sectionName="Details">
        <>
          <InfoRow label="Email" value={user.email} />
          <InfoRow label="Phone" value={user.phone} />
          <InfoRow label="Website" value={user.website} />
          <InfoRow label="Company" value={user.company?.name} />
          <InfoRow label="City" value={user.address?.city} />
          <InfoRow label="Street" value={user.address?.street} />
          <InfoRow label="Suite" value={user.address?.suite} />
          <InfoRow label="Zipcode" value={user.address?.zipcode} />
        </>
      </CollapsibleSection>
      <CollapsibleSection sectionName="Galeries">
          <GalleryView/>
      </CollapsibleSection>
    </View>
  )
}

const styles = StyleSheet.create({
  infoSection: {
    display: "flex",
    rowGap: 8,
  },
});
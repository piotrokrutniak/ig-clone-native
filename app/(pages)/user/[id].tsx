import { Text, View } from "@/components/Themed";
import { InfoSection } from "@/components/user/info-section/InfoSection";
import { UserProfileHeader } from "@/components/user/user-profile-header/UserProfileHeader";
import { useUserById } from "@/data/react-query/useUserById";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet } from "react-native";

const UserPage = () => {
  const { id } = useLocalSearchParams();
  const user = useUserById(parseInt(id.toString()));

  return (
    <>
      <UserProfileHeader user={user} />
      <InfoSection user={user} />
    </>
  )
}



export default UserPage;


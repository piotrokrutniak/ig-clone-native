import { InfoSection } from "@/components/user/info-section/InfoSection";
import { UserProfileHeader } from "@/components/user/user-profile-header/UserProfileHeader";
import { useUserById } from "@/data/react-query/useUserById";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";

const UserPage = () => {
  const { id } = useLocalSearchParams();
  const user = useUserById(parseInt(id.toString()));

  return (
    <ScrollView>

      <UserProfileHeader user={user} />
      <InfoSection user={user} />
    </ScrollView>
  )
}

export default UserPage;


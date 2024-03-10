import { ScrollView, StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { PostsList } from "@/components/home/posts-list/PostsList";
import { InfoSection } from "@/components/user/info-section/InfoSection";
import { UserProfileHeader } from "@/components/user/user-profile-header/UserProfileHeader";
import { useUserPosts } from "@/data/react-query/useUserPosts";
import { useUserContext } from "@/components/contexts/user-context/UserContext";
import { useEffect } from "react";

export default function TabTwoScreen() {
  const { user } = useUserContext();
  const posts = useUserPosts(user.id);

  useEffect(() => {
    console.log("posts", posts);
  }, [posts]);

  const firstName = user?.name.split(" ")[0] + "'s";

  return (
    <ScrollView>
      <UserProfileHeader user={user} />
      <View style={styles.mainView}>
        <InfoSection user={user} />
        <Text style={styles.postsHeader}>{`${firstName} Posts`}</Text>
        <PostsList posts={posts} />
      </View>
    </ScrollView>
  );
};
  

const styles = StyleSheet.create({
  mainView: {
    gap: 16,
  },
  postsHeader: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 24,
    color: "white",
  },
});
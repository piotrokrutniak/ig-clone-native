import { View } from "@/components/Themed";
import { PostsList } from "@/components/home/posts-list/PostsList";
import { InfoSection } from "@/components/user/info-section/InfoSection";
import { UserProfileHeader } from "@/components/user/user-profile-header/UserProfileHeader";
import { useUserById } from "@/data/react-query/useUserById";
import { useUserPosts } from "@/data/react-query/useUserPosts";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const UserPage = () => {
  const { id } = useLocalSearchParams();
  const user = useUserById(parseInt(id.toString()));
  const posts = useUserPosts(parseInt(id.toString()));

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

export default UserPage;

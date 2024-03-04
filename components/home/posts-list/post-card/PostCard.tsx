import { View } from "@/components/Themed";
import { UserHeader } from "@/components/reusable-components/UserHeader";
import { Post } from "@/data/types";
import { useThemeColors } from "@/utilities/themes/useThemeColors";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export const PostCard = ({ post }: { post: Post }) => {
  const router = useRouter();
  const {} = useThemeColors();

  const [modalVisible, setModalVisible] = useState(true);

  const goToModal = () => {
    router.navigate({ pathname: '/(pages)/user/modal', params: { id: post.id.toString() }});
  };

  return (
    <View style={styles.card}>
      <UserHeader userId={post.userId} />
      <Link href={`/post/${post.id}`} asChild>
        <View style={styles.body}>
          <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
          <Text style={styles.content}>{post.body}</Text>
        </View>
      </Link>
      <View style={styles.actions}>
        <ActionButton icon={<MaterialIcons name="thumb-up" size={24} color="white" />} label="Like" />
        <ActionButton icon={<MaterialIcons name="comment" size={24} color="white" />} label="Comments" onTouch={goToModal} />
      </View>
    </View>
  );
}

const ActionButton = ({ icon, label, onTouch }: { icon: React.ReactNode, label: string, onTouch?: () => void }) => {
  return (
    <View style={styles.actionButton} onTouchEnd={onTouch}>
      {icon}
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    maxWidth: "100%",
    fontSize: 20,
    fontWeight: "600",
    color: "white",
  },
  body: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  content: {
    color: "white",
  },
  card: {
    display: "flex",
    rowGap: 16,
    padding: 16,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "black",
    borderWidth: 1,
    borderColor: "white",
    overflow: "hidden",
    color: "white",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
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
  },
  modal: {
    backgroundColor: "red",
    padding: 16,
    borderRadius: 8,
    zIndex: 1000,
  }
});

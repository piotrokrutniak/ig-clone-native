import { ScrollView, StyleSheet } from 'react-native';

import { View } from '@/components/Themed';
import { usePosts } from '@/data/react-query/usePosts';
import { PostsList } from '@/components/home/posts-list/PostsList';

export default function TabOneScreen() {
  usePosts();

  return (
    <View style={styles.container}>
      <ScrollView>
        <PostsList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});



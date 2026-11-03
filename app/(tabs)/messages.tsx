import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function MessagesScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Messages</Text>
      <View style={styles.item}>
        <Text style={styles.name}>Emma</Text>
        <Text style={styles.preview}>Hey! Are we still on for brunch tmrw?</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.name}>Clique Friday Night <Text style={styles.badge}>Read only</Text></Text>
        <Text style={styles.preview}>This chat is read only • 18 members</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.name}>Clique General Announcements <Text style={styles.badge}>Announcements</Text></Text>
        <Text style={styles.preview}>Weekly update • Event calendar live</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#07070b', padding: 16 },
  title: { color: '#fff', fontSize: 24, fontWeight: '700', marginBottom: 16 },
  item: { backgroundColor: '#12121a', borderRadius: 16, padding: 16, marginBottom: 12 },
  name: { color: '#fff', fontWeight: '600', fontSize: 16 },
  preview: { color: '#8e8e9a', marginTop: 4 },
  badge: { backgroundColor: '#7c3aed', color: '#fff', fontSize: 11, paddingHorizontal: 6, borderRadius: 6 },
});

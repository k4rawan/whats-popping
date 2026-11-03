import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function LiveScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Live Feed</Text>
      <View style={styles.story}>
        <View style={styles.header}>
          <View style={styles.avatar}><Text>👨</Text></View>
          <View>
            <Text style={styles.name}>Jake</Text>
            <Text style={styles.time}>at Clique • 2m ago</Text>
          </View>
        </View>
        <View style={styles.media} />
        <Text style={styles.caption}>Packed house tonight 🔥 DJ kicking it off</Text>
      </View>
      <View style={styles.story}>
        <View style={styles.header}>
          <View style={[styles.avatar, { borderColor: '#ff2d92' }]}><Text>👩</Text></View>
          <View>
            <Text style={styles.name}>Emma</Text>
            <Text style={styles.time}>at Giorgio’s • 12m ago</Text>
          </View>
        </View>
        <View style={[styles.media, { backgroundColor: '#1e293b' }]} />
        <Text style={styles.caption}>Love this spot 🍷 Perfect vibes tonight</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#07070b', padding: 16 },
  title: { color: '#fff', fontSize: 24, fontWeight: '700', marginBottom: 16 },
  story: { backgroundColor: '#12121a', borderRadius: 16, padding: 14, marginBottom: 14 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center', marginRight: 10, borderWidth: 2, borderColor: '#c084fc' },
  name: { color: '#fff', fontWeight: '600' },
  time: { color: '#8e8e9a', fontSize: 13 },
  media: { height: 160, backgroundColor: '#4c1d95', borderRadius: 12, marginBottom: 10 },
  caption: { color: '#fff' },
});

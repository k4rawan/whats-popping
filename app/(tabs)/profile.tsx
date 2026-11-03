import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}><Text style={{ fontSize: 48 }}>👑</Text></View>
      <Text style={styles.name}>Alex Morgan</Text>
      <Text style={styles.bio}>Chasing good vibes, great music & hidden city spots.</Text>
      <View style={styles.stats}>
        <View><Text style={styles.statNum}>128</Text><Text style={styles.statLabel}>Stories</Text></View>
        <View><Text style={styles.statNum}>47</Text><Text style={styles.statLabel}>Saved</Text></View>
        <View><Text style={styles.statNum}>212</Text><Text style={styles.statLabel}>Friends</Text></View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => router.push('/create-party')}>
        <Text style={styles.btnText}>Create Private Party</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#07070b', alignItems: 'center', paddingTop: 40 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#1a1a24', justifyContent: 'center', alignItems: 'center', borderWidth: 3, borderColor: '#fbbf24', marginBottom: 12 },
  name: { color: '#fff', fontSize: 24, fontWeight: '700' },
  bio: { color: '#8e8e9a', textAlign: 'center', marginVertical: 12, paddingHorizontal: 30 },
  stats: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginVertical: 20 },
  statNum: { color: '#fff', fontSize: 22, fontWeight: '700', textAlign: 'center' },
  statLabel: { color: '#8e8e9a', fontSize: 13, textAlign: 'center' },
  btn: { backgroundColor: '#ff2d92', paddingHorizontal: 40, paddingVertical: 16, borderRadius: 14, marginTop: 10 },
  btnText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});

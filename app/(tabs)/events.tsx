import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Events</Text>

      <View style={styles.card}>
        <Text style={styles.eventTitle}>CLIQUE <Text style={styles.badge}>Popular</Text></Text>
        <Text style={styles.sub}>Saturday • 10PM–4AM • Hip Hop</Text>
        <Text style={styles.price}>From $30</Text>
        <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Get Tickets</Text></TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.eventTitle}>Jordan’s Birthday Bash <Text style={styles.private}>Private</Text></Text>
        <Text style={styles.sub}>Invite only • Cover $50</Text>
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#333' }]}><Text style={styles.btnText}>View Invite</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#07070b', padding: 16 },
  title: { color: '#fff', fontSize: 24, fontWeight: '700', marginBottom: 16 },
  card: { backgroundColor: '#12121a', borderRadius: 16, padding: 16, marginBottom: 14 },
  eventTitle: { color: '#fff', fontSize: 18, fontWeight: '700' },
  badge: { backgroundColor: '#7c3aed', color: '#fff', fontSize: 12, paddingHorizontal: 8, borderRadius: 8, overflow: 'hidden' },
  private: { backgroundColor: '#444', color: '#fff', fontSize: 12, paddingHorizontal: 8, borderRadius: 8 },
  sub: { color: '#8e8e9a', marginVertical: 6 },
  price: { color: '#fff', fontSize: 18, marginVertical: 8 },
  btn: { backgroundColor: '#ff2d92', padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  btnText: { color: '#fff', fontWeight: '600' },
});

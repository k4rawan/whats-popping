import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.4215,
          longitude: -75.6972,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}
        customMapStyle={darkMapStyle}
      >
        {/* Place Pins */}
        <Marker coordinate={{ latitude: 45.4295, longitude: -75.692 }} title="Club Lumina" description="Club • 237 live">
          <View style={[styles.pin, { backgroundColor: '#831843' }]}><Text style={styles.pinEmoji}>🍸</Text></View>
        </Marker>
        <Marker coordinate={{ latitude: 45.426, longitude: -75.688 }} title="Elora Bistro">
          <View style={[styles.pin, { backgroundColor: '#14532d' }]}><Text style={styles.pinEmoji}>🍽️</Text></View>
        </Marker>
        <Marker coordinate={{ latitude: 45.418, longitude: -75.70 }} title="Altitude 360">
          <View style={[styles.pin, { backgroundColor: '#155e75' }]}><Text style={styles.pinEmoji}>🛋️</Text></View>
        </Marker>

        {/* Friend Symbols */}
        <Marker coordinate={{ latitude: 45.424, longitude: -75.695 }}>
          <View style={styles.friendPin}>
            <Text style={{ fontSize: 22 }}>👑</Text>
            <Text style={styles.friendLabel}>BOSS</Text>
          </View>
        </Marker>
        <Marker coordinate={{ latitude: 45.427, longitude: -75.691 }}>
          <View style={styles.friendAvatar}><Text>👩</Text></View>
        </Marker>
      </MapView>

      <ScrollView style={styles.sheet} showsVerticalScrollIndicator={false}>
        <Text style={styles.sectionTitle}>What's Popping?</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
          <TouchableOpacity style={styles.card}>
            <View style={[styles.cardImg, { backgroundColor: '#4c1d95' }]} />
            <Text style={styles.cardTitle}>Club Lumina</Text>
            <Text style={styles.cardSub}>Club • 237 live now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <View style={[styles.cardImg, { backgroundColor: '#1e3a8a' }]} />
            <Text style={styles.cardTitle}>Elora Bistro</Text>
            <Text style={styles.cardSub}>Restaurant • 84 live</Text>
          </TouchableOpacity>
        </ScrollView>

        <Text style={styles.sectionTitle}>Vibes</Text>
        <View style={styles.vibes}>
          <View style={styles.vibe}><Text>🍃 Chill</Text></View>
          <View style={styles.vibe}><Text>😊 Fun</Text></View>
          <View style={styles.vibe}><Text>🎵 Dance</Text></View>
        </View>

        <Text style={styles.sectionTitle}>Friends</Text>
        <ScrollView horizontal>
          <View style={styles.friendItem}>
            <View style={styles.crown}><Text style={{ fontSize: 28 }}>👑</Text></View>
            <Text style={styles.friendName}>BOSS</Text>
          </View>
          <View style={styles.friendItem}>
            <View style={[styles.avatar, { borderColor: '#c084fc' }]}><Text>👩</Text></View>
            <Text style={styles.friendName}>Emma</Text>
          </View>
          <View style={styles.friendItem}>
            <View style={[styles.avatar, { borderColor: '#22d3ee' }]}><Text>👨</Text></View>
            <Text style={styles.friendName}>Liam</Text>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const darkMapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#1d1d2b' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8a8a9a' }] },
  { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#0c4a6e' }] },
];

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#07070b' },
  map: { height: 320 },
  sheet: { flex: 1, backgroundColor: '#07070b', borderTopLeftRadius: 24, borderTopRightRadius: 24, padding: 16 },
  sectionTitle: { color: '#fff', fontSize: 22, fontWeight: '700', marginBottom: 12, marginTop: 8 },
  card: { width: 200, backgroundColor: '#12121a', borderRadius: 16, marginRight: 12, overflow: 'hidden' },
  cardImg: { height: 100 },
  cardTitle: { color: '#fff', fontSize: 16, fontWeight: '600', padding: 10, paddingBottom: 2 },
  cardSub: { color: '#8e8e9a', fontSize: 12, paddingHorizontal: 10, paddingBottom: 10 },
  vibes: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  vibe: { flex: 1, backgroundColor: '#12121a', padding: 14, borderRadius: 16, alignItems: 'center' },
  friendItem: { alignItems: 'center', marginRight: 16 },
  crown: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#1a1a24', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#fbbf24' },
  avatar: { width: 56, height: 56, borderRadius: 28, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center', borderWidth: 2 },
  friendName: { color: '#fff', fontSize: 12, marginTop: 4 },
  pin: { width: 36, height: 36, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  pinEmoji: { fontSize: 18 },
  friendPin: { alignItems: 'center' },
  friendLabel: { color: '#fbbf24', fontSize: 10, fontWeight: '700' },
  friendAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#222', justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#c084fc' },
});

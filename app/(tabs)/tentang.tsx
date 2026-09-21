import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { typeScale, spacing } from "../../constants/styles";

export default function TabTentang() {
  return (
    <SafeAreaView style={{ flex: 1, padding: spacing.sedang, gap: spacing.kecil, }}>
      <Text accessibilityLabel="Judul halaman Tentang Jelajah Aman" style={{ fontSize: typeScale.judul, fontWeight: "bold",}}>
        Tentang Jelajah Aman
      </Text>
      <Text style={{ fontSize: typeScale.isi }}>
        Nama Aplikasi: Jelajah Aman
      </Text>
      <Text style={{ fontSize: typeScale.isi }}>
        Versi: 1.0.0
      </Text>
      <Text style={{ fontSize: typeScale.isi }}>
        Pembuat: M. Ichwan Al Hafidz
      </Text>
    </SafeAreaView>
  );
}
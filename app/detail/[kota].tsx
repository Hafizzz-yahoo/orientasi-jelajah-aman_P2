// app/detail/[kota].tsx
import { View, Button } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import WeatherCard from "../../components/WeatherCard";

export default function HalamanDetail() {
    const { kota } = useLocalSearchParams<{ kota: string }>();

    return (
        <View style={{ padding: 16, gap: 16 }}>
            <WeatherCard kota={kota} suhu={29} tingkatAQI="BAIK" />
            <Button title="Tambah Favorit"onPress={() => router.push("/tambah-favorit")} accessibilityLabel="Tambah kota ke daftar favorit"/>
        </View>
    );
}
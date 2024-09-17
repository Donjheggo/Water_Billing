import { View } from "react-native";
import { Link } from "expo-router";

export default function Screen() {
  return (
    <View className="h-screen flex items-center justify-center">
      <Link href="/sign-in" className="text-2xl text-primary">
        Sign in
      </Link>
    </View>
  );
}

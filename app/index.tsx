import { View, Image, ScrollView, Pressable } from "react-native";
import { Text } from "~/components/ui/text";
import { Link } from "expo-router";
import { useRouter } from "expo-router";

export default function Screen() {
  const router = useRouter();
  return (
    <ScrollView className="h-full bg-secondary">
      <View className="min-h-[80vh] flex justify-center items-center gap-5 p-6">
        <Text className="text-3xl text-primary font-semibold">
          Dinagat Island Water Billing
        </Text>
        <Image
          source={require("../assets/images/auth.png")}
          resizeMode="contain"
          // className="w-[120] h-[120]"
          style={{ width: 200, height: 200 }}
        />
        <Text className="text-blue-800 font-semibold text-lg px-5 text-center">
          Search your bill and pay where you are.
        </Text>
        <Pressable
          onPress={() => router.push("/(auth)/sign-in")}
          className="w-full"
        >
          <View className="w-full border text-center border-primary bg-primary rounded-lg p-5 items-center flex justify-center overflow-hidden">
            <Text className="text-xl  text-white">Get Started</Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}

import { View, Image, ScrollView, Pressable } from "react-native";
import { Text } from "~/components/ui/text";
import { useRouter } from "expo-router";

export default function Screen() {
  const router = useRouter();
  return (
    <ScrollView className="h-full bg-secondary">
      <View className="min-h-[80vh] flex justify-center items-center gap-5 p-6">
        <Image
          source={require("../assets/images/auth.png")}
          resizeMode="contain"
          // className="w-[120] h-[120]"
          style={{ width: 200, height: 200 }}
        />
        <Text className="text-blue-800 font-semibold text-xl px-5 text-center">
          Search your bill and pay wherever you are.
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

import { View, SafeAreaView, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Search } from "lucide-react-native";
import { useRouter } from "expo-router";
import { useColorScheme } from "~/lib/useColorScheme";
import { NotebookPen, FileClock } from "lucide-react-native";
import { supabase } from "~/lib/supabase";
import { LogOut } from "lucide-react-native";

const instructions = [
  "Search your name in the 'Search Bill' section.",
  "Then fill up the form in 'Payment Form' section.",
  "Lastly check the 'Payment History' section if your payment goes through.",
];

export default function Home() {
  const { isDarkColorScheme } = useColorScheme();
  const router = useRouter();
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="px-5">
          <Text className="font-semibold text-2xl dark:text-secondary">
            Instructions:
          </Text>

          {instructions.map((item, index) => (
            <Text className="text-lg dark:text-secondary" key={index}>
              • {item}
            </Text>
          ))}

          <Button
            variant="outline"
            onPress={() => router.push("/(tabs)/search")}
            size="lg"
            className="flex flex-row mt-10 dark:bg-black "
          >
            {isDarkColorScheme ? (
              <Search color="#fff" size={18} />
            ) : (
              <Search color="#000" size={18} />
            )}
            <Text style={{ marginLeft: 5 }} className="dark:text-white">
              Search Bills
            </Text>
          </Button>
          <View className="flex flex-row mt-5">
            <Button
              variant="default"
              onPress={() => router.push("/(tabs)/payment")}
              size="lg"
              className="flex flex-row flex-1 mr-5"
            >
              <NotebookPen color="#fff" size={18} />

              <Text style={{ marginLeft: 5 }}>Pay Bills</Text>
            </Button>
            <Button
              variant="default"
              onPress={() => router.push("/(tabs)/payment-history")}
              size="lg"
              className="flex-1 flex flex-row"
            >
              <FileClock color="#fff" size={18} />
              <Text style={{ marginLeft: 5 }}>View History</Text>
            </Button>
          </View>
          <Button
            variant="secondary"
            onPress={async() => await supabase.auth.signOut()}
            size="lg"
            className="flex flex-row mt-5 dark:bg-black "
          >
            {isDarkColorScheme ? (
              <LogOut color="#fff" size={18} />
            ) : (
              <LogOut color="#000" size={18} />
            )}
            <Text style={{ marginLeft: 5 }} className="dark:text-white">
              Sign out
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

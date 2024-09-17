import { Tabs, Redirect } from "expo-router";
import { Home, FileSearch, FileClock } from "lucide-react-native";
import { useAuth } from "~/context/auth-context";

export default function TabLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          title: "Search Bills",
          tabBarIcon: ({ color }) => <FileSearch size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments History",
          tabBarIcon: ({ color }) => <FileClock size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}

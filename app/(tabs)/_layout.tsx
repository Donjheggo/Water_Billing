import { Tabs, Redirect } from "expo-router";
import { Home, FileSearch, FileClock, NotebookPen } from "lucide-react-native";
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
        name="search"
        options={{
          title: "Search Bills",
          tabBarIcon: ({ color }) => <FileSearch size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Payment Form",
          tabBarIcon: ({ color }) => <NotebookPen size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="payment-history"
        options={{
          title: "Payment History",
          tabBarIcon: ({ color }) => <FileClock size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}

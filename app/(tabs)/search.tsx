import { View, SafeAreaView, ScrollView } from "react-native";
import SearchBar from "~/components/bills/search-bar";
import Bill from "~/components/bills/bill";
import { useEffect, useState } from "react";
import { SearchBill } from "~/lib/actions/bills";
import { useLocalSearchParams } from "expo-router";
import { Text } from "~/components/ui/text";
import type { BillsT } from "~/components/bills/bill";

export default function Search() {
  const { query } = useLocalSearchParams();
  const [bill, setBill] = useState<BillsT[]>([]);

  useEffect(() => {
    const fetchBill = async () => {
      if (!query) return;
      const billData = await SearchBill(query as string);
      setBill(billData ?? []);
    };

    fetchBill();
  }, [query]);

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="px-5">
          <SearchBar />
          {!query ? (
            <Text className="text-center mt-2 dark:text-secondary">
              Active bills will appear here
            </Text>
          ) : bill.length > 0 ? (
            bill.map((item, index) => <Bill key={index} bill={item} />)
          ) : (
            <Text className="text-center mt-2 dark:text-secondary">
              No active bills for{" "}
              <Text className="font-semibold dark:text-secondary">
                {" "}
                {query}
              </Text>{" "}
            </Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

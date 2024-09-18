import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import type { BillT } from "~/app/(tabs)/search";
import { View } from "react-native";

export default function Bill({ bill }: { bill: BillT }) {
  const formatted_due_date = new Date(bill.due_date).toDateString();
  const formatted_penalty_date = new Date(bill.penalty_date).toDateString();
  const amount_after_penalty = bill.amount + bill.penalty;
  return (
    <Card className="w-full mt-2">
      <CardHeader>
        <CardTitle>{bill.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Text className="dark:text-white">
          Due Date:{" "}
          <Text className="font-semibold dark:text-white">
            {formatted_due_date}{" "}
          </Text>
        </Text>
        <Text className="dark:text-white">
          Penalty Date:{" "}
          <Text className="font-semibold ml-5 dark:text-white">
            {formatted_penalty_date}{" "}
          </Text>
        </Text>
        <View className="border-t border-dashed mt-5">
          <Text className="text-xl dark:text-white">
            TOTAL AMOUNT DUE:{" "}
            <Text className="font-semibold text-2xl mt-5 dark:text-white">
              ₱{bill.amount}{" "}
            </Text>
          </Text>
          <Text className="dark:text-white">
            TOTAL AFTER DUE:{" "}
            <Text className="dark:text-white">₱{amount_after_penalty}</Text>
          </Text>
        </View>
      </CardContent>
    </Card>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import type { BillT } from "~/app/(tabs)/search";
import { View } from "react-native";

export default function Bill({ bill }: { bill: BillT }) {
  const formatted_due_date = new Date(bill.due_date).toDateString();
  const formatted_penalty_date = new Date(
    bill.penalty_date
  ).toDateString();
  const amount_after_penalty = bill.amount + bill.penalty;
  return (
    <Card className="w-full mt-2">
      <CardHeader>
        <CardTitle>{bill.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <Text>
          Due Date: <Text className="font-semibold">{formatted_due_date} </Text>
        </Text>
        <Text>
          Penalty Date:{" "}
          <Text className="font-semibold ml-5">{formatted_penalty_date} </Text>
        </Text>
        <View className="border-t border-dashed mt-5">
          <Text className="text-xl">
            TOTAL AMOUNT DUE:{" "}
            <Text className="font-semibold text-2xl mt-5">
              ₱{bill.amount}{" "}
            </Text>
          </Text>
          <Text>
            TOTAL AFTER DUE: <Text>₱{amount_after_penalty}</Text>
          </Text>
        </View>
      </CardContent>
    </Card>
  );
}

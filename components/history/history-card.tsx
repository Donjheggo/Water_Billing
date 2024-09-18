import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { View } from "react-native";
import type { PaymentsT } from "~/app/(tabs)/payment-history";

export default function PaymentHistoryCard({ item }: { item: PaymentsT }) {
  return (
    <Card className="w-full mt-2">
      <CardHeader>
        <CardTitle>{item.client_name}</CardTitle>
        <CardDescription>
          {new Date(item.created_at).toDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>
          Billing Number:{" "}
          <Text className="font-semibold">{item.billing_number}</Text>
        </Text>
        <Text>
          Amount: <Text className="font-semibold">{item.amount} </Text>
        </Text>
        <Text>
          Gcash Reference Number:{" "}
          <Text className="font-semibold">{item.gcash_ref_no} </Text>
        </Text>

        <View className="border-t border-dashed mt-5">
          <Text className="pt-2">
            Payor: <Text className="text-xl">{item.owner_email}</Text>
          </Text>
        </View>
      </CardContent>
    </Card>
  );
}

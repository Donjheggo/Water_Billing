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
        <Text className="dark:text-white">
          Billing Number:{" "}
          <Text className="font-semibold dark:text-white">
            {item.billing_number}
          </Text>
        </Text>
        <Text className="dark:text-white">
          Payor:{" "}
          <Text className="font-semibold dark:text-white">
            {item.owner_email}
          </Text>
        </Text>
        <Text className="dark:text-white">
          Amount:{" "}
          <Text className="font-semibold dark:text-white">{item.amount} </Text>
        </Text>
        <Text className="dark:text-white">
          Gcash Reference Number:{" "}
          <Text className="font-semibold dark:text-white">
            {item.gcash_ref_no}{" "}
          </Text>
        </Text>
      </CardContent>
    </Card>
  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import type { BillsT } from "../bills/bill";
import { Tables } from "~/database.types";

type UsersT = Tables<"users">

export type PaymentsT = {
  amount: number;
  billing_number: BillsT;
  created_at: string;
  gcash_ref_no: number;
  id: string;
  user_id: UsersT;
};

export default function PaymentHistoryCard({ item }: { item: PaymentsT }) {
  return (
    <Card className="w-full mt-2">
      <CardHeader>
        <CardTitle>{item.billing_number.client_id?.name}</CardTitle>
        <CardDescription>
          {new Date(item.created_at).toDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text className="dark:text-white">
          Billing Number:{" "}
          <Text className="font-semibold dark:text-white">
            {item.billing_number.billing_number}
          </Text>
        </Text>
        <Text className="dark:text-white">
          Payor:{" "}
          <Text className="font-semibold dark:text-white">
            {item.user_id.email}
          </Text>
        </Text>
        <Text className="dark:text-white">
          Amount:{" "}
          <Text className="font-semibold dark:text-white">₱{item.amount} </Text>
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

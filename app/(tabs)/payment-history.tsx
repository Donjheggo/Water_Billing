import PaymentHistoryCard from "~/components/history/history-card";
import { View } from "react-native";
import { ScrollView, SafeAreaView } from "react-native";
import { GetPayments } from "~/lib/actions/payment";
import { useState } from "react";
import { useAuth } from "~/context/auth-context";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";
import type { PaymentsT } from "~/components/history/history-card";

export default function PaymentHistory() {
  const { user } = useAuth();
  const [payments, setPayments] = useState<PaymentsT[]>([]);

  useFocusEffect(
    useCallback(() => {
      const fetchPayments = async () => {
        const data = await GetPayments(user?.id || "");
        setPayments(data as PaymentsT[]);
      };

      fetchPayments();
    }, [])
  );

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="px-5">
          {payments.map((item, index) => (
            <PaymentHistoryCard item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

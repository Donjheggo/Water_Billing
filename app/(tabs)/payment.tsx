import { View, SafeAreaView, ScrollView } from "react-native";
import { Text } from "~/components/ui/text";
import PaymentForm from "~/components/payment/payment-form";

export default function Payment() {
  return (
    <SafeAreaView className="h-full">
      <ScrollView>
        <View className="px-5">
          <PaymentForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

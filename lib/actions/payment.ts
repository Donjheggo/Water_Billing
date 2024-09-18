import { Alert } from "react-native";
import { supabase } from "../supabase";
import type { PaymentFormT } from "~/components/payment/payment-form";

export default async function SendPayment(form: PaymentFormT) {
  try {
    const { error } = await supabase
      .from("payments")
      .insert(form)
      .select();

    if (error) {
      Alert.alert(error.message);
    }
    return;
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
    }
  }
}

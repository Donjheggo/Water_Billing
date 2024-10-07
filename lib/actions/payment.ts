import { Alert } from "react-native";
import { supabase } from "../supabase";
import type { PaymentFormT } from "~/components/payment/payment-form";

export async function SendPayment(form: PaymentFormT) {
  try {
    const { error } = await supabase.from("payments").insert(form).select();

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

export async function GetPayments(user_id: string) {
  try {
    const { data, error } = await supabase
      .from("payments")
      .select(
        `*, user_id!inner(email), billing_number!inner(*,client_id!inner(name))`
      )
      .eq("user_id", user_id);
    if (error) {
      Alert.alert(error.message);
      return [];
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
      return [];
    }
  }
}

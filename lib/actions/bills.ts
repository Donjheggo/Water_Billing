import { supabase } from "../supabase";
import { Alert } from "react-native";

export async function SearchBill(searchQuery: string) {
  try {
    if (!searchQuery) {
      return [];
    }
    const { data: bills, error } = await supabase
      .from("bills")
      .select(`*, client_id!inner(id,name)`) // Use a proper inner join
      .ilike("client_id.name", `%${searchQuery}%`)
      .eq("is_paid", false);

    if (error) {
      Alert.alert(error.message);
      return [];
    }

    // filtering for search query foreign key
    const filteredData = bills.filter((item) => item.client_id !== null);

    return filteredData || [];
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message);
      return [];
    }
  }
}

export async function GetBills() {
  try {
    const { data, error } = await supabase
      .from("bills")
      .select(`*, client_id!inner(id,name)`);

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

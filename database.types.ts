export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bills: {
        Row: {
          amount: number
          billing_number: string
          created_at: string
          due_date: string
          id: string
          isPaid: boolean
          name: string
          penalty: number
          penalty_date: string
        }
        Insert: {
          amount: number
          billing_number: string
          created_at?: string
          due_date: string
          id?: string
          isPaid?: boolean
          name: string
          penalty: number
          penalty_date: string
        }
        Update: {
          amount?: number
          billing_number?: string
          created_at?: string
          due_date?: string
          id?: string
          isPaid?: boolean
          name?: string
          penalty?: number
          penalty_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "bill_name_fkey"
            columns: ["name"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["name"]
          },
        ]
      }
      clients: {
        Row: {
          address: string
          contact_number: number
          created_at: string
          id: string
          is_connected: boolean
          meter_number: number
          name: string
        }
        Insert: {
          address: string
          contact_number: number
          created_at?: string
          id?: string
          is_connected?: boolean
          meter_number: number
          name: string
        }
        Update: {
          address?: string
          contact_number?: number
          created_at?: string
          id?: string
          is_connected?: boolean
          meter_number?: number
          name?: string
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number
          bill_id: string
          billing_number: string | null
          client_name: string
          created_at: string
          gcash_ref_no: number
          id: string
          owner_email: string
          owner_id: string
        }
        Insert: {
          amount: number
          bill_id?: string
          billing_number?: string | null
          client_name: string
          created_at?: string
          gcash_ref_no: number
          id?: string
          owner_email: string
          owner_id?: string
        }
        Update: {
          amount?: number
          bill_id?: string
          billing_number?: string | null
          client_name?: string
          created_at?: string
          gcash_ref_no?: number
          id?: string
          owner_email?: string
          owner_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_bill_id_fkey"
            columns: ["bill_id"]
            isOneToOne: false
            referencedRelation: "bills"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_billing_number_fkey"
            columns: ["billing_number"]
            isOneToOne: false
            referencedRelation: "bills"
            referencedColumns: ["billing_number"]
          },
          {
            foreignKeyName: "payments_client_name_fkey"
            columns: ["client_name"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["name"]
          },
          {
            foreignKeyName: "payments_owner_email_fkey"
            columns: ["owner_email"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "payments_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string
          id: string
          name: string | null
          role: Database["public"]["Enums"]["USER_ROLE"]
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["USER_ROLE"]
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          role?: Database["public"]["Enums"]["USER_ROLE"]
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      USER_ROLE: "USER" | "ADMIN"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

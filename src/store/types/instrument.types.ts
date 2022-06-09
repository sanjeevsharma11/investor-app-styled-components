export interface IInstrumentDocument {
  A_Exchange: string
  A_Expiry: string
  A_Instrument_Type: string
  A_Lot_Size: number
  A_Strike_Price: number
  A_Symbol_Token: string
  A_Tick_Size: number
  A_Trading_Symbol: string
  Display_Name: string
  Is_Used: boolean
  LTP: number
  Z_Exchange: string
  Z_Symbol: string
  Z_Instrument_Type: string
  Trading_View_Stock_Name: string
  New_Display_Name: string
  New_Strike_Price: number
  Search_Value: string
  Is_Expired: boolean
  Is_Deleted: boolean
  createdAt: Date
  updatedAt: Date
}

import { StateClient } from "../enums/state-client.enum";


export interface ClientI {
  "state": StateClient,
  "TVA": number,
  'id': number,
  'name': string,
  'totalCaHt': number,
  "comment": string
}


import { Client } from "./client";
import { Currency } from "./currency";

export class Compte {
  id: number;
  numCpt : number;
  description : String;
  rib: String;
  soldeComptable: number;
  soldeDisponible: number;
  cloture : boolean;
  currency : Currency;
  devise : String;
  client : Client;

  
}

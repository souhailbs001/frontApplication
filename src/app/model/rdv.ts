import {Objet} from './objet';

export class Rdv {

id : number;
objet : Objet;
dateRdv : String;
heureDebut : String;
heureFin : String;
commentaire : String;
statutRdv : any;


constructor(args : any){
    this.id = args.id;
    this.objet = args.objet;
    this.dateRdv = args.dateRdv;

    this.heureDebut = args.heureDebut;

    this.heureFin = args.heureFin;

    this.commentaire = args.commentaire;
    this.statutRdv = args.statutRdv;



}

}

import { Payload } from "./Payload";
import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
export class Rocket{
    name:string;
    totalCapacityKg:number;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];
    constructor(name:string,totalCapacityKg:number){
        this.name=name;
        this.totalCapacityKg=totalCapacityKg;
    }
    sumMass(items:Payload[]):number{
        let myTotalMass=0;
        for(let i=0;i<items.length;i++){
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    }
    currentMassKg():number{
        
        return this.sumMass(this.astronauts)+this.sumMass(this.cargoItems);
       
    }
    canAdd(item:Payload):boolean{
        if(this.currentMassKg()+item.massKg<=this.totalCapacityKg){
            return true;
        }
    }
    addCargo(cargo:Cargo):boolean{
        let canAddCargo=this.canAdd(cargo);
        if(canAddCargo===true){
            this.cargoItems.push(cargo);
            return true;
        }else{
            return false;
        }
        
    }
    addAstronaut(astronaut:Astronaut):boolean{
        let canAddAstro=this.canAdd(astronaut);
        if(canAddAstro===true){
            this.astronauts.push(astronaut);
            return true;
        }else{
            return false;
        }
    }
}
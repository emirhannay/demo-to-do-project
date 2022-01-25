/*export class activityItem {
    id : number;
    description : string;
    success : string;

    constructor (id : number, description : string, success : string){
        this.description = description;
        this.id = id;
        this.success = success;
    }
    
    

}*/

export interface activityItem {
   
    description : string;
    success : boolean;

}
import { level } from "./level";
import { skill } from "./skill";

export class game{
    constructor(
        public  id :number,
        public  title :string,
        public  description :string,
        public skill: skill,
        public levels: level[]

    ){}

    
    
}
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import { Tags } from "./Tags";
import {v4 as uuid} from "uuid";
import { User } from "./User";



@Entity("compliments")
class Compliment{

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_envio: string;
    
    @JoinColumn({name: "user_envio"})
    @ManyToOne(() => User)
    userEnvio: User

    @Column()
    user_recebedor: string;
    
    @JoinColumn({name: "user_recebedor"})
    @ManyToOne(() => User)
    userRecebedor: User

    @Column()
    tag_id: string;
    
    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tags)
    tag: Tags
    
    @Column()
    mensagem: string;
    
    @CreateDateColumn()
    created_at: Date;

    constructor(){

        if(!this.id){
            this.id = uuid();
        }

    }
}
export { Compliment }
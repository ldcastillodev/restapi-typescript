import { type } from 'os';
import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  UpdateDateColumn, 
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Servicio } from './Servicio';

/*interface Servicio {
  servicio: string,
}*/

@Entity()
export class Tecnico extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  name: string;
  /*
  @OneToMany(type => Servicio, servicio => servicio.tecnicos)
  servicios: Servicio[];
  */











  /*@Column({
    type: 'jsonb',
    nullable: true
  })
  servicios: Servicios[];
*/
/*@Column( {type: "jsonb", nullable: true})
  servicios: Servicio[];
  */
  
  /*@CreateDateColumn()
  createdAt: Date;
  */
}


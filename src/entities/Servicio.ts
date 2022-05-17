import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  BaseEntity
} from 'typeorm';


@Entity()
export class Servicio extends BaseEntity {
  @PrimaryGeneratedColumn()
  id : number;

  @Column()
  descripcion: string;

  @Column()
  cliente: string;

  @Column()
  tecnico_asignado: string;

  @CreateDateColumn()
  fecha: Date;
  
  @Column()
  id_tecnico: number;

}
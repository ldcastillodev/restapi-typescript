import { DataSource } from 'typeorm'
import { Tecnico } from "./entities/Tecnico";
import { Servicio } from './entities/Servicio';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://jbtirhoxfgzmes:cbeb3713fc0283f290a9bff895803be566ea2e7285281a3342ec334655ab2274@ec2-3-224-164-189.compute-1.amazonaws.com:5432/dbo9bsccg8ed0u',
  entities: [Tecnico, Servicio],
  logging: true,
  synchronize: true,
  ssl: {
    rejectUnauthorized: false,
}
})


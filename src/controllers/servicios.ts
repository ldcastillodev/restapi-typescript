import { Request, Response } from 'express';
import { Tecnico } from "../entities/Tecnico";
import { Servicio } from "../entities/Servicio";
const jwt = require('jsonwebtoken');


export const getServicios = async (req: Request , res: Response) => {
  
  try {
    const id = req.params.id_tecnico;
    const servicios = await Servicio.find({
      select: ['descripcion', 'cliente', 'tecnico_asignado', 'fecha'], 
      where: { id_tecnico: parseInt(id) }
    });
    console.log()
    if (servicios.length > 0) {
      res.status(201).json({
        message: 'Listado de Servicios',
        lista_servicios: servicios
      });
    } else {
      res.status(201).json({
        message: 'No hay servicios asignados',
      });
    }
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({message: error.message});
    }
  } 
}

export const createServicio = async (req: Request , res: Response) => {
  try {
    let cliente = req.body.nombre_cliente;
    let servicio_solicitado = req.body.servicio_solicitado;
   
    const tecnicos = await Tecnico.find();
    const tecnico_asignado = tecnicos[Math.floor(Math.random() * (tecnicos.length))];  
    if(tecnicos) {
      const servicio = new Servicio();
      servicio.descripcion = servicio_solicitado;
      servicio.cliente = cliente;
      servicio.tecnico_asignado = tecnico_asignado.name;
      servicio.id_tecnico = tecnico_asignado.id; 
      await servicio.save();
    }
    res.status(201).json({
      message: 'Servicio solicitado exitosamente',
      datos_cliente: {
        nombre: cliente,
        servicio_solicitado: servicio_solicitado,
        tecnico_asignado: tecnico_asignado
      }
    });
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({message: error.message});
    }
  } 
}




import { Request, Response } from 'express';
import { Servicio } from '../entities/Servicio';
import { Tecnico } from "../entities/Tecnico";
const jsonwebtoken = require('jsonwebtoken');

export const getTecnicos = async (req: Request , res: Response) => {
  try {
    const tecnicos = await Tecnico.find({select: ['id', 'name']})
    
    if(tecnicos.length > 0) {
      res.status(200).json({
        tecnicos: tecnicos
      });
    } else {
      res.status(200).json({
        message: 'No hay tecnicos en la DB'
      });
    }
    
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({message: error.message})
    }
  } 
};

export const getTecnico = async (req: Request , res: Response) => {
  try {
    const id = req.params.id;
    const tecnico = await Tecnico.findOne({ where: { id: parseInt(id) }})
    const servicio = await Servicio.findOne({ where: { id: parseInt(id) }})
    
    if(tecnico!== null && servicio !== null) {
      res.status(201).json({
        message: 'Tecnico encontrado',
        tecnico: tecnico, 
        servicio: servicio
      });
    } else if(tecnico !== null) {
        res.status(201).json({
          message: 'Tecnico encontrado',
          tecnico: tecnico, 
          servicio: 'No hay servicios asignados'
        });
    } else {
      res.status(201).json({
        message: 'Tecnico no existe en la DB'
        
      });
    }
    
  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({message: error.message});
    }
  } 
}

export const createTecnico = async (req: any, res: Response) => {
  try {
    const {name} = req.body;
    const tecnico = new Tecnico();
    tecnico.name = name;
    //tecnico.servicios = servicio_solicitado;
    await tecnico.save();
    res.status(201).json({
      message: 'Tecnico creado en la BD',
      Tecnico: tecnico,
      token: req.token
    });

  } catch (error) {
    if(error instanceof Error) {
      res.status(500).json({message: error.message});
    }
  } 
}

export const deleteTecnico = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const tecnico = await Tecnico.findOne({ where: { id: parseInt(id) }})
    const servicio = await Servicio.findOne({ where: { id: parseInt(id) }})
    if (tecnico) {
      await tecnico.remove();
    } 
    if (servicio) {
      await servicio.remove()
    }
    res.status(201).json({ message: 'Tecnico eliminado de la BD' });

  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({message: error.message})
    }
  } 
}
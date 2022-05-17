const jsonWebToken = require('jsonwebtoken');
import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  let admin = req.body.admin as string;
  let password = req.body.password as string;
  
  const token = jsonWebToken.sign( 
    {  
      admin: admin,
      password:  password
    }, 
    'mysecret',
    {
      expiresIn: '7d'
    }
  );
  res.status(200).json({
    token: token
  })
}

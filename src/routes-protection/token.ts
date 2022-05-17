const jsonWebToken = require('jsonwebtoken')

export const verificarToken = (req: any, res: any, next: any) => {
  const authHeader = req.get('Authorization');
  
  if(typeof authHeader !== 'undefined') {
    const token = authHeader.split(' ')[1];
    try {
      let decodedToken = jsonWebToken.verify(token, 'mysecret')
      req.token = decodedToken;
      
    } catch (err: any) {
        err.statusCode = 500;
        err.message = 'No autorizado'
        throw err;
      }
      next();
    }
  }
  

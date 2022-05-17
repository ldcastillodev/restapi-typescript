
import app from './app';
import { AppDataSource } from './db';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('database connected')
    app.listen(process.env.PORT || 3000, () => {
      console.log(`app running on port `, process.env.PORT || 3000);
    });

  } catch (error) {
      console.log(error);
    }

}

main();

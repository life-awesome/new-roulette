import { connect } from 'mongoose';
import * as process from 'process';

async function connectMongo() {
  await connect(process.env.urlDatabase as string).then(() => {
    console.log('Подключение к БД прошло успешно');
  });
}

export default connectMongo;

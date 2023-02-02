import * as jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';
import * as process from 'process';

const secretKey = process.env.secret_key as string;

function generateJwt(userId: string, time: '1h' | '15min' | '24h' = '1h') {
  return jwt.sign({ userId }, secretKey, { expiresIn: time });
}

function verifyJwt(token: string): JwtPayload {
  return <JwtPayload>jwt.verify(token, secretKey);
}

export default {
  generateJwt,
  verifyJwt
};

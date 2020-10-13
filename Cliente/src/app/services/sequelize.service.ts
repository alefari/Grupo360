import { Injectable } from '@angular/core';
const { Sequelize } = require('sequelize');

@Injectable({
  providedIn: 'root'
})
export class SequelizeService {

  constructor() {
    const sequelize = new Sequelize('database', 'root', 'password', {
      host: 'localhost',
      dialect: 'mysql'
    });
    try {
      sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

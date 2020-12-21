"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class User {
    constructor(nombre, apellido, correo, password, roles) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.password = password;
        this.roles = roles;
    }
    encryptPassword() {
    }
    passwordSetter(newPass) {
        this.password = newPass;
    }
    // async encryptPassword(password: string) {
    //     const hashedPassword = await new Promise((resolve, reject) => {
    //         bcrypt.hash(password, 10, function(err, hash) {
    //             if(err) reject(err)
    //             resolve(hash)
    //         });
    //     })
    //     return hashedPassword;
    // }
    // async encryptPassword(password: string) {
    //     const salt = await bcrypt.genSalt(10);
    //     return await bcrypt.hash(password, salt);
    // }
    comparePassword(password, recievedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcryptjs_1.default.compare(password, recievedPassword);
        });
    }
}
exports.User = User;

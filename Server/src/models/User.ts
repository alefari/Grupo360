import bcrypt from 'bcryptjs';

export class User {
    nombre: string;
    apellido: string;
    correo: string;
    password: any;
    roles: number[];

    constructor(nombre: string, apellido: string, correo: string, password: string, roles: number[]) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.password = password;
        this.roles = roles;
    }

    encryptPassword() {
        
    }

    passwordSetter(newPass: any) {
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
    async comparePassword(password: any, recievedPassword: string) {
        return await bcrypt.compare(password, recievedPassword)
    }
}

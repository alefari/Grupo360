export class User {

  constructor(
    public cedula: number,
    private _token: string,
    private _tokenExpirationDate: Date,
    public roles: number[]) {
  }


  get token() {
    if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
    }
    return this._token;
  }

}

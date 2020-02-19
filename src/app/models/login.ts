export class Login {
  userName: string;
  password: string;
}

export class User {
  constructor(
    public username: string,
    public token: string) {
  }
}

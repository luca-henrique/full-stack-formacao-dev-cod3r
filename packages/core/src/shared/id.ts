import { v4 as uuid, validate } from "uuid";
export class Id {
  static new(): string {
    return uuid();
  }

  static isValidId(id: string) {
    return validate(id);
  }
}

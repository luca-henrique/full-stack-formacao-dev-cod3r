export class Password {
  static generete(size: number = 8): string {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseAlphabet = alphabet.toUpperCase();

    const digits = "0123456789";
    const specialCharacters = "!@#$%^&*()_+-=[]{}|;:',.<>?/`~";

    const grupos = [alphabet, uppercaseAlphabet, digits, specialCharacters];
    const password = [];

    for (let i = 0; i < size; i++) {
      const grupo = grupos[Math.floor(Math.random() * grupos.length)];
      password.push(grupo[Math.floor(Math.random() * grupo.length)]);
    }

    return password.join("");
  }
}

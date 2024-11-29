export default class Alias {
  static format(name: string): string {
    return name.replace(/ /g, "-").toLowerCase();
  }
}

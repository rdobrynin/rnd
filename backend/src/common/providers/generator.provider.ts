export class GeneratorProvider {
  static getMySQLIdxKeyFromSqlMessage(message: string): string {
    const messagePart = message.split(/[^\w']+/);

    return messagePart[messagePart.length - 1].replace(/'/g, '');
  }
}

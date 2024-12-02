export class GeneratorProvider {
  static getMySQLIdxKeyFromSqlMessage(message: string): string {
    const messagePart = message.split(/[^\w']+/);

    return messagePart[messagePart.length - 1].replace(/'/g, '');
  }

  static diffMinutes(dt2: Date, dt1: Date): number {
    // Calculate the difference in milliseconds between the two provided dates and convert it to seconds
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    // Convert the difference from seconds to minutes
    diff /= 60;

    // Return the absolute value of the rounded difference in minutes
    return Math.abs(Math.round(diff));
  }
}

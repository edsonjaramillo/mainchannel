export class DateManager {
  dateAdjuster = (num_days: number): Date => {
    const today = new Date();
    const numericDay: number = today.setDate(today.getDate() + num_days);
    return new Date(numericDay);
  };

  getYesterdayISO = (): string => {
    const yesterday = this.dateAdjuster(-1);
    const date = yesterday.toISOString().split('T')[0];
    return `${date}T00:00:00.000Z`;
  };
}

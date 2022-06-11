export class DateManager {
  dateAdjuster = (num_days: number): string => {
    const today = new Date();
    const numericDay: number = today.setDate(today.getDate() + num_days);
    return new Date(numericDay).toISOString().split('T')[0] + 'T00:00:00';
  };

  getYesterdayISO = (): string => {
    const yesterday = this.dateAdjuster(-1);
    const date = yesterday.split('T')[0];
    return `${date}T00:00:00.000Z`;
  };
}
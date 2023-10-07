export class DatetimeFmt {
  static getMMDD(date: string) {
    const d = new Date(date);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    return `${month}/${day}`;
  }

  static getDayOfWeek(date: string) {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short' };
    return new Date(date).toLocaleDateString('en-US', options);
  }

  static getTime(date: string) {
    return new Date(date).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
}

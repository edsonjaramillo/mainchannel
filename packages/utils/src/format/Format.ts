export class Format {
  static fmtPhoneNumber(phoneNumber: string) {
    return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
  }
  static fmtCurrency(value: number) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  static formatEIN(ein: string) {
    const first = ein.slice(0, 2);
    const second = ein.slice(2, 9);

    return `${first}-${second}`;
  }

  static formatDateTime(date: string) {
    const eventDate = new Date(date);

    const dateOptions: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'America/Chicago',
      weekday: 'long',
    };

    return eventDate.toLocaleDateString('en-US', dateOptions);
  }
}

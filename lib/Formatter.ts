export class Formatter {
  getEventDate = (date: string): string => {
    const eventDate = new Date(date);

    const dateOptions: Intl.DateTimeFormatOptions = {
      month: 'short',
      day: 'numeric',
    };

    return eventDate.toLocaleDateString('en-US', dateOptions);
  };

  getEventTime = (date: string): string => {
    const eventDate = new Date(date);

    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      hour: 'numeric',
      minute: 'numeric',
    };

    return eventDate.toLocaleDateString('en-US', dateOptions);
  };

  formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  formatPhoneNumber = (phoneNumber: string): string => {
    const areaCode = phoneNumber.slice(0, 3);
    const prefix = phoneNumber.slice(3, 6);
    const lineNumber = phoneNumber.slice(6, 10);
    return `Phone: (${areaCode}) ${prefix}-${lineNumber}`;
  };
}

function addDays(date: Date, days: number): Date {
  const now = new Date();
  now.setMonth(now.getMonth() + days);
  return now;
}

addDays(new Date(), 10);

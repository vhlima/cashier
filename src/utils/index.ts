export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export function formatCurrency(amount: number): string {
  const formattedAmount = amount.toFixed(2); // Convert to 2 decimal places
  let currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(formattedAmount));

  if (Number.isInteger(amount)) {
    currency = currency.replace('.00', ''); // Remove decimal part if it's an integer
  }

  return currency;
}

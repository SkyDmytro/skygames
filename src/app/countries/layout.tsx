import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guess the country game',
  description: ' Guess the country game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}

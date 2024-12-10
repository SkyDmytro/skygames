import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guess the Word',
  description: ' Wordle game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
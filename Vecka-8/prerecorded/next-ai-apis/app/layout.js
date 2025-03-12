import './globals.css';

export const metadata = {
  title: 'AI API Demo',
  description: 'Demo application showcasing different AI APIs',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

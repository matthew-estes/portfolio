import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Matthew Estes",
  description: "Full-stack developer specializing in modern web applications and blockchain solutions.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="transition-colors duration-300 bg-white dark:bg-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

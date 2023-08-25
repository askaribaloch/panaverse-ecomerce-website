import { Header } from "@/components/layout/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Wrapper from "./shared/Wrapper";
import Providers from "@/utils/Providor";
import { ClerkProvider, auth } from "@clerk/nextjs";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dine Market",
  description: "Ecommerce app by piaic studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {userId : user_id} = auth();
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className={inter.className}>
            <Wrapper>
              <Header userId={user_id as string} />
              {children}
              <Footer />
            </Wrapper>
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}

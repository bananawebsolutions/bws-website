import ClientLayout from "./ClientLayout";

export const metadata = {
    title: "Banana Web Solutions",
    description: "Banana Web Solutions",
};

export default function RootLayout({ children }) {
    return <ClientLayout>{children}</ClientLayout>;
}

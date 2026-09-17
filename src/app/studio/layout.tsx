export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ height: "100vh", margin: 0, padding: 0 }}>{children}</div>
    );
}

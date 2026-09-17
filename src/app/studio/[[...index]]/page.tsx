import dynamic from "next/dynamic";

const StudioClient = dynamic(() => import("./StudioClient"), {
    ssr: false,
    loading: () => (
        <div
            style={{
                height: "100vh",
                display: "grid",
                placeItems: "center",
                fontFamily: "system-ui, sans-serif",
            }}
        >
            Loading Studio…
        </div>
    ),
});

export default function StudioPage() {
    return <StudioClient />;
}

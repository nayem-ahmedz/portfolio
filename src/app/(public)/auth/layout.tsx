export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row-reverse py-20">
                {
                    children
                }
            </div>
        </div>
    );
}
import Link from "next/link";

export default function Auth() {
    return (
        <>
            <title>Auth | Nayem's Space</title>
            <div className="card bg-base-100 w-xs shrink-0 shadow-2xl">
                <div className="card-body text-center">
                    <h1 className="text-3xl md:text-4xl font-bold">Hey</h1>
                    <p className="py-6 max-w-2xl text-xl">
                        What are you looking for?
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link href='/auth/register' className="btn btn-neutral btn-outline">Register</Link>
                        <Link href='/auth/login' className="btn btn-primary">Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
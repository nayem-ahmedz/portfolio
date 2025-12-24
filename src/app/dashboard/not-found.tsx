import Link from "next/link";

export default function NotFound() {
    return (
        <section className="hero min-h-[600px]">
            <title>404 Page Not Found</title>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                        Oops! Page Not Found
                    </h1>
                    <p className="py-6 text-gray-600 dark:text-gray-400 text-lg">
                        Looks like you've followed a broken link or entered a URL that doesn't exist on my site.
                        In case of a missing page, please let me know!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/"
                            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 shadow-lg"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
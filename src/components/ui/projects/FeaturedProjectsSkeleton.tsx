export default function FeaturedProjectsSkeleton() {
    return (
        <section className="px-4 py-6 pb-12 md:pb-16">
            <h2 className="text-3xl text-center mb-8 font-medium">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="card bg-base-200 shadow-md border border-gray-300 dark:border-gray-700 animate-pulse">
                        <div className="aspect-video bg-base-300 w-full" />

                        <div className="card-body">
                            <div className="flex justify-between items-start">
                                <div className="h-6 w-1/2 bg-base-300 rounded" />
                                <div className="h-5 w-20 bg-base-300 rounded-full" />
                            </div>

                            {/* Match the 'grow-0' and 'line-clamp' spacing */}
                            <div className="space-y-2 mt-2 h-10">
                                <div className="h-3 w-full bg-base-300 rounded" />
                                <div className="h-3 w-3/4 bg-base-300 rounded" />
                            </div>

                            {/* Match the 'grow' section to push the button down */}
                            <div className="flex flex-wrap gap-2 mt-4 grow">
                                <div className="h-4 w-12 bg-base-300 rounded-full" />
                                <div className="h-4 w-12 bg-base-300 rounded-full" />
                                <div className="h-4 w-12 bg-base-300 rounded-full" />
                            </div>

                            <div className="card-actions justify-end mt-4">
                                <div className="h-8 w-24 bg-primary/20 rounded-lg" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
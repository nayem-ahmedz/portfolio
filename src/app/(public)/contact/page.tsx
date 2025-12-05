export default function Contact() {
    return (
        <section className="hero bg-base-200 min-h-[70vh] py-10">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                <div className="text-center lg:text-left shrink-0">
                    <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
                    <h2 className="text-2xl">Nayem Ahmed</h2>
                    <p>Full-stack Web Developer</p>
                    <p>
                        Email: nayemahmedz@proton.me
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input type="email" className="input w-full" placeholder="Full Name" />
                                <label className="label">Email</label>
                                <input type="email" className="input w-full" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input w-full" placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Send</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
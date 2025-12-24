import Link from "next/link";

export default function Register() {
    return (
        <>
            <title>Register | Smart Garments</title>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6 max-w-2xl">
                    Create a account to get access to all products, order, track and get in touch. As a buyer, choose role buyer, and manager is requested to select manager as role
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            <label htmlFor="name" className="label mt-1">Name</label>
                            <input type="text" id="name" className="input w-full" placeholder="Full Name" />
                            <label htmlFor="email" className="label mt-1">Email</label>
                            <input type="email" id="email" className="input w-full" placeholder="Email" />
                            <label htmlFor="photo-url" className="label mt-1">Photo URL</label>
                            <input type="url" id="photo-url" className="input w-full" placeholder="Photo Link" />
                            <label htmlFor="password" className="label mt-1">Password</label>
                            <input type="password" id="password" className="input w-full" placeholder="Password" />
                            <input type="submit" value='Register' className="btn btn-neutral mt-4" />
                        </fieldset>
                    </form>
                    <p className="mt-1">
                        Already have an account? <Link href='/auth/login' className="underline">Login</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
import Link from "next/link";

export default function Login(){
    return(
        <>
            <title>Login | Nayem's Space</title>
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6 max-w-2xl">
                    Welcome Back! Login to get access to your personalized dashboard, track order and update your order, delete and see or manage all the orders, payment history
                </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            <label htmlFor="email" className="label mt-1">Email</label>
                            <input type="email" id="email" className="input w-full" placeholder="Email" />
                            <label htmlFor="password" className="label mt-1">Password</label>
                            <input type="password" id="password" className="input w-full" placeholder="Password" />
                            <input type="submit" value='Login' className="btn btn-neutral mt-4" />
                        </fieldset>
                    </form>
                    <p className="text-center text-base">OR</p>
                    <p className="mt-1">
                        Don't have an account? <Link href='/auth/register' className="underline">Register</Link>
                    </p>
                </div>
            </div>
        </>
    );
}
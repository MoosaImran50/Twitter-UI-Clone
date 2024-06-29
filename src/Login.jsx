import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

function Login() {
    return (
        <div className="flex lg:h-[100vh]">
            <div className="hidden lg:flex grow flex-col justify-center text-center">
                <div className="p-8">
                    <XIcon
                        style={{ height: "380px", width: "380px" }}
                        className="hover:cursor-pointer"
                    />
                </div>
            </div>
            <div className="mx-auto w-full xs:max-w-[600px] lg:mx-0 min-w-[45vw] flex flex-col justify-center p-4">
                <div className="lg:min-w-[437px] lg:max-w-[760px] flex flex-col items-center lg:items-start p-5">
                    <div className="box">
                        <div className="lg:hidden pb-3">
                            <XIcon
                                style={{ height: "45px", width: "45px" }}
                                className="hover:cursor-pointer"
                            />
                        </div>
                        <div className="x-logo">
                            <h2 className="text-[31px] xs:text-[35px] mb-2 lg:mb-8 font-bold">
                                Sign in to X
                            </h2>
                        </div>
                        <div className="flex flex-col items-start">
                            <button className="bg-white w-[300px] h-[40px] rounded-full mr-5">
                                <div className="text-[15px] font-semibold text-black">
                                    <span>
                                        <GoogleIcon /> Sign in with Google
                                    </span>
                                </div>
                            </button>
                            <button className="bg-white w-[300px] h-[40px] rounded-full mr-5 my-5">
                                <div className="text-[15px] font-semibold text-black">
                                    <span>
                                        <AppleIcon /> Sign in with Apple
                                    </span>
                                </div>
                            </button>
                            <div className="w-[300px] flex justify-between items-center my-1">
                                <div className="w-[135px] h-[1px] bg-[#2F3336]"></div>
                                <div>
                                    <span className="text-[15px]">or</span>
                                </div>
                                <div className="w-[135px] h-[1px] bg-[#2F3336]"></div>
                            </div>
                            <div className="w-[300px] h-[40px]  mr-5 my-3">
                                <div className="text-[15px] font-semibold">
                                    <input className="w-full p-3 bg-black border border-zinc-700 rounded-md" type="email" name="email" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="w-[300px] h-[40px] mr-5 my-3">
                                <div className="text-[15px] font-semibold">
                                    <input className="w-full p-3 bg-black border border-zinc-700 rounded-md" type="password" name="password" id="password" placeholder="Password" />
                                </div>
                            </div>
                            <button className="w-[300px] h-[40px] text-black border-[1px] border-[#536471] rounded-full mr-5 mb-2 bg-white mt-6">
                                <div className="text-[15px] font-semibold">
                                    <span>Sign in</span>
                                </div>
                            </button>
                            <button className="w-[300px] h-[40px] text-white border-[1px] border-[#536471] rounded-full mr-5 my-0 xlg:my-3 bg-black">
                                <div className="text-[15px] font-semibold">
                                    <span>Forgot password?</span>
                                </div>
                            </button>
                            <div className="mt-8 mb-1 xlg:mb-5">
                                <span className="text-[17px] font-bold">
                                    Dont have an account?
                                </span>
                            </div>
                            <button className="w-[300px] h-[40px] text-[#1D9BF0] border-[1px] border-[#536471] rounded-full mr-5 mb-2">
                                <div className="text-[15px] font-semibold">
                                    <span>Sign up</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
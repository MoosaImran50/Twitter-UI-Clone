import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

function Signup() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const daysOfMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
    const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013]

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
                            <h2 className="text-[25px] xs:text-[29px] mb-2 lg:mb-8 font-bold">
                                Create your account
                            </h2>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="w-[300px] h-[40px]  mr-5 my-3">
                                <div className="text-[15px] font-semibold">
                                    <input className="w-full p-3 bg-black border border-zinc-700 rounded-md" type="text" name="name" id="name" placeholder="Name" />
                                </div>
                            </div>
                            <div className="w-[300px] h-[40px]  mr-5 my-3">
                                <div className="text-[15px] font-semibold">
                                    <input className="w-full p-3 bg-black border border-zinc-700 rounded-md" type="email" name="email" id="email" placeholder="Email" />
                                </div>
                            </div>
                            <div className="w-[300px] mt-2">
                                <h2>Date of birth</h2>
                                <p className="text-sm text-zinc-500">
                                    This will not be shown publicly.
                                </p>
                            </div>
                            <div className="DOB flex text-md my-2">
                                <div className="mr-2">
                                    <select className="bg-black p-2 border border-zinc-700 rounded-md" name="month" id="month">
                                        <option value="Month" selected disabled hidden>Month</option>
                                        {months.map((m) => (
                                            <option value={`${m}`}>{m}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mx-3">
                                    <select className="bg-black p-2 border border-zinc-700 rounded-md" name="day" id="day">
                                        <option value="Day" selected disabled hidden>Day</option>
                                        {daysOfMonth.map((d) => (
                                            <option value={`${d}`}>{d}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="ml-3">
                                    <select className="bg-black p-2 border border-zinc-700 rounded-md" name="year" id="year">
                                        <option value="Year" selected disabled hidden>Year</option>
                                        {years.map((y) => (
                                            <option value={`${y}`}>{y}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="w-[300px] h-[40px] mr-5 my-3">
                                <div className="text-[15px] font-semibold">
                                    <input className="w-full p-3 bg-black border border-zinc-700 rounded-md" type="password" name="password" id="password" placeholder="Password" />
                                </div>
                            </div>
                            <div className="w-[300px] h-[40px] mr-5 my-3">
                                <div className="text-[15px] font-semibold">
                                    <input className="w-full p-3 bg-black border border-zinc-700 rounded-md" type="password" name="confirmpassword" id="comfirmpassword" placeholder="Confirm Password" />
                                </div>
                            </div>
                            <button className="w-[300px] h-[40px] text-black border-[1px] border-[#536471] rounded-full mr-5 mb-2 bg-white mt-6">
                                <div className="text-[15px] font-semibold">
                                    <span>Sign up</span>
                                </div>
                            </button>
                            <div className="w-[300px] text-[11px] text-[#71767B]">
                                By signing up, you agree to the{" "}
                                <span className="text-[#1D9BF0] hover:underline hover:cursor-pointer">
                                    Terms of Service
                                </span>{" "}
                                and{" "}
                                <span className="text-[#1D9BF0] hover:underline hover:cursor-pointer">
                                    Privacy Policy
                                </span>
                                , including{" "}
                                <span className="text-[#1D9BF0] hover:underline hover:cursor-pointer">
                                    Cookie Use.
                                </span>
                            </div>
                            <div className="mt-4 mb-1 xlg:mb-5">
                                <span className="text-[17px] font-bold">
                                    Already have an account?
                                </span>
                            </div>
                            <button className="w-[300px] h-[40px] text-[#1D9BF0] border-[1px] border-[#536471] rounded-full mr-5 mb-2">
                                <div className="text-[15px] font-semibold">
                                    <span>Sign in</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Signup
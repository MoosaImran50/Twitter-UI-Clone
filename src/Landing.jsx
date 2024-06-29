import XIcon from "@mui/icons-material/X";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

export default function Landing() {
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
        <div className="lg:min-w-[437px] lg:max-w-[760px] flex flex-col p-5">
          <div className="lg:hidden pb-3">
            <XIcon
              style={{ height: "45px", width: "45px" }}
              className="hover:cursor-pointer"
            />
          </div>
          <div>
            <h1 className="text-[40px] xs:text-[64px] my-8 lg:my-12 font-extrabold">
              Happening now
            </h1>
          </div>
          <div>
            <h2 className="text-[23px] xs:text-[31px] mb-4 xs:mb-8 font-bold">
              Join today.
            </h2>
          </div>
          <div className="flex flex-col items-start">
            <button className="bg-white w-[300px] h-[40px] rounded-full mr-5 mb-2">
              <div className="text-[15px] font-semibold text-black">
                <span>
                  <GoogleIcon /> Sign up with Google
                </span>
              </div>
            </button>
            <button className="bg-white w-[300px] h-[40px] rounded-full mr-5">
              <div className="text-[15px] font-semibold text-black">
                <span>
                  <AppleIcon /> Sign up with Apple
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
            <button className="w-[300px] h-[40px] bg-[#1D9BF0] rounded-full mr-5 mb-2">
              <div className="text-[15px] font-semibold">
                <span>Create account</span>
              </div>
            </button>
            <div className="w-[300px] text-[11px] text-[#71767B] mb-5">
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
            <div className="mt-8 lg:mt-10 mb-5">
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
  );
}

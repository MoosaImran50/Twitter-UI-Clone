import XIcon from "@mui/icons-material/X";

function ForgotPassword() {
    return (
        <>
            <div className="flex justify-center mt-[20vh] h-[100vh]">
                <div className="flex-col">
                    <div className="py-2">
                        <XIcon
                            style={{ height: "45px", width: "45px" }}
                            className="hover:cursor-pointer"
                        />
                    </div>
                    <div className="py-2">
                        <h2 className="text-[30px] font-bold">Find your X account</h2>
                        <h3>Enter your email, phone number, or username</h3>
                    </div>
                    <div>
                        <input className="bg-black p-2 my-2 border-2 border-zinc-800 w-full rounded-md" type="text" name="account" id="account" placeholder="Email, phone number, or username" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
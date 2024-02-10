import { Button } from "@mui/material";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import OtpInput from "react-otp-input";
import theme from "../../../style/theme";
import Iconify from "../../../components/iconify";

export default function OptVarify() {
  const [otp, setOtp] = useState("");
  const [timerCheck, setTimerCheck] = useState(true);
  const [resetTime, setResetTime] = useState(false);
  const OtpRequestHandeler = () => {
    // setResetTimek(true);

    setResetTime(true);
    setTimerCheck(true);

    // setTimeout(() => {
    //   setResetTimek(false);
    // }, 1500); // wait for 1.5 seconds before restarting
  };
  const handleComplete = () => {
    setTimerCheck(false);
    if (resetTime) return { shouldRepeat: true, delay: 1.5 };
  };
  return (
    <>
      <div className="login-form-box p-10  md:w-1/3 space-y-5 ">
        <div>
          <h1 className="text-[28px] font-bold text-center">ফোন যাচাইকরণ!</h1>
        </div>
        <div className="text-center">
          <div className="text-secondary-light">
            অনুগ্রহ করে আপনাকে পাঠানো ৪-সংখ্যার কোডটি লিখুন
          </div>
          <div className="text-primary font-medium">+৮৮ ০১৭৯৬৯৮৩৩৩৯</div>
          <div className=" flex justify-center mt-5">
            <OtpInput
              inputStyle={{
                background: "transparent",
                border: "1px solid gray",
                width: 50,
                height: 50,
                borderRadius: 7,
                outline: "none",
                color: theme.palette.primary.main,
              }}
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />
          </div>
          <div className="mt-5 flex  gap-3 justify-center ">
            <button
              disabled={timerCheck}
              className={`mt-4 ${!timerCheck && "text-primary"}`}
              onClick={OtpRequestHandeler}
            >
              পুনরায় পাঠান
            </button>
            <div className="w-[5px] h-[5px]">
              {timerCheck ? (
                <CountdownCircleTimer
                  size={50}
                  remainingTime={5}
                  strokeWidth={5}
                  isPlaying={timerCheck}
                  duration={120}
                  onComplete={handleComplete}
                  // colors={["#A30000","#A30000", "#F7B801","#009164"  ]}
                  colors={[theme.palette.primary.main]}
                  // colorsTime={[7, 5, 2, 0]}
                >
                  {({ remainingTime }) => remainingTime}
                </CountdownCircleTimer>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center h-12">
          <Button variant="contained" className="w-full">
            যাচাই করুন
          </Button>
        </div>
        <div className="flex justify-center flex-row items-center">
          <div>
            <Iconify
              icon="ic:baseline-arrow-back"
              className="text-[14px] mb-[2px] text-primary"
            />
          </div>
          <p className="ml-[1px]">
            <span className="text-primary font-medium cursor-pointer">
              সাইন ইন
            </span>{" "}
            করতে ফিরে যান!
          </p>
        </div>
      </div>
    </>
  );
}

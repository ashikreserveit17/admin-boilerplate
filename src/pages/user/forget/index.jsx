import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
export default function Forget() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="login-form-box p-10  md:w-1/3 space-y-5 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: true,
                minLength: {
                  value: 11,
                  message: "ফোন নম্বর এগারো সংখ্যার হতে হবে",
                },
                maxLength: {
                  value: 11,
                  message: "ফোন নম্বর এগারো সংখ্যা অতিক্রম করেছে",
                },

                pattern: {
                  value: /^[0-9]+$/,
                  message: "কেবল সংখ্যা অনুমোদন করা হবে",
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  label="ফোন নম্বর"
                  variant="outlined"
                  defaultValue=""
                  onChange={onChange} // send value to hook form
                  onBlur={onBlur} // notify when input is touched/blur
                  value={value}
                  className="bg-white w-full rounded-md "
                  error={!!errors.phone} // Show error state if there is a validation error
                  helperText={errors.phone?.message}
                  // type="tel"
                  type="number"
                />
              )}
            />
          </div>
          {/* {errors.phone?.message} */}
          <div className="w-full mt-5">
            <Button variant="contained" className="w-full py-3 " type="submit">
              লগইন করুন
            </Button>
          </div>
          <div className="mt-5  flex justify-center ">
            আমার কোন একাউন্ট নেই?
            <NavLink>
              {" "}
              <p className="font-bold text-primary pl-1">{"নিবন্ধন করুন"}</p>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}

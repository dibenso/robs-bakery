import * as Yup from "yup";

export const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email Is Invalid")
    .required("Email Is Required")
    .max(255, "Email Must Be 255 Characters Or Less"),
  phone: Yup.string()
    .matches(
      /^((\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4})|\d{10}$/,
      "Enter A Valid Phone Number Such As: 1234567890, 123-456-7890, (123) 456-7890, 123 456 7890, 123.456.7890, or +91 (123) 456-7890"
    )
    .required("Phone Number Is Required"),
  name: Yup.string().required("Your Name Is Required").max(64, "Name Must Be 64 Characters Or Less"),
  comment: Yup.string()
    .required("Please Enter A Comment")
    .min(10, "Comment Must Be At Least 10 Characters")
    .max(512, "Comment Must Be 512 Characters Or Less")
});

export const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username Is Required")
    .min(10, "Username Must Be At Least 1 Character")
    .max(64, "Username Must Be 64 Characters Or Less"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number And One Special Case Character"
    )
    .max(128, "Password Should Be No More Than 128 Characters")
    .required("Password Is Required")
});

export const SignInSchema = Yup.object().shape({
  username: Yup.string().required("Username Is Required"),
  password: Yup.string().required("Password Is Required")
});

import { useState, useRef, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Eye, EyeOff } from "lucide-react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import s from "./index.module.scss";

export const RegisterForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(120);
  const codeRefs = useRef<(HTMLInputElement | null)[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    if (isCodeSent && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCodeSent, timer]);

  const validationSchema = Yup.object({
    emailOrPhone: Yup.string().required(t("auth.errorMessage")),
    password: Yup.string().min(6, t("auth.register.minLength")).required(t("auth.errorMessage")),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], t("auth.register.passwordMatch"))
      .required(t("auth.errorMessage")),
  });

  return (
    <Formik
      initialValues={{
        emailOrPhone: "",
        password: "",
        confirmPassword: "",
        code: ["", "", "", "", "", ""],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (!isCodeSent) {
          setIsCodeSent(true);
          setTimer(120);
        } else {
          console.log("Регистрация:", values);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={s.registerForm}>
          <div className={s.inputBlock}>
            <Field
              type="text"
              name="emailOrPhone"
              placeholder={t("auth.register.emailOrPhone")}
              className={s.input}
            />
            <ErrorMessage name="emailOrPhone" component="div" className={s.error} />
          </div>

          <div className={s.inputBlock}>
            <Field
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder={t("auth.password")}
              className={s.input}
            />
            {showPassword ? (
              <EyeOff
                onClick={() => setShowPassword(false)}
                size={25}
                className={s.toggleShowPassword}
              />
            ) : (
              <Eye
                onClick={() => setShowPassword(true)}
                size={25}
                className={s.toggleShowPassword}
              />
            )}
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>

          <div className={s.inputBlock}>
            <Field
              type="password"
              name="confirmPassword"
              placeholder={t("auth.register.confirmPassword")}
              className={s.input}
            />

            <ErrorMessage name="confirmPassword" component="div" className={s.error} />
          </div>

          {isCodeSent ? (
            <>
              <div className={s.codeInput}>
                {values.code.map((_, index) => (
                  <Field
                    key={index}
                    type="text"
                    maxLength={1}
                    className={s.input}
                    value={values.code[index]}
                    innerRef={(el: HTMLInputElement | null) => (codeRefs.current[index] = el)}
                    onChange={(e: { target: { value: string } }) => {
                      const newCode = [...values.code];
                      const value = e.target.value.replace(/[^0-9]/g, "");

                      if (value) {
                        newCode[index] = value;
                        if (index < values.code.length - 1) {
                          codeRefs.current[index + 1]?.focus();
                        }
                      } else {
                        newCode[index] = "";
                        if (index > 0) {
                          codeRefs.current[index - 1]?.focus();
                        }
                      }

                      setFieldValue("code", newCode);
                    }}
                    onKeyDown={(e: { key: string }) => {
                      if (e.key === "Backspace" && !values.code[index] && index > 0) {
                        codeRefs.current[index - 1]?.focus();
                      }
                    }}
                  />
                ))}
              </div>
              <div className={s.timer}>
                {t("auth.timerText.text")} {timer} {t("auth.timerText.sec")}
              </div>
            </>
          ) : null}

          <button type="submit" className={s.button}>
            {isCodeSent ? t("auth.register.submitRegister") : t("auth.acceptCode")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

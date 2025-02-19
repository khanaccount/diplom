import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Eye, EyeOff } from "lucide-react";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import s from "./index.module.scss";

export const LoginForm: React.FC = () => {
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
    email: Yup.string().email(t("auth.login.incorrectEmail")).required(t("auth.errorMessage")),
    password: Yup.string().required(t("auth.errorMessage")),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", rememberMe: false, code: ["", "", "", "", "", ""] }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (!isCodeSent) {
          setIsCodeSent(true);
          setTimer(120);
        } else {
          console.log("Вход:", values);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form className={s.form}>
          <div className={s.inputBlock}>
            <Field
              type="email"
              name="email"
              placeholder={t("auth.login.email")}
              className={s.input}
            />
            <ErrorMessage name="email" component="div" className={s.error} />
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

          <label className={s.rememberMe}>
            <Field type="checkbox" name="rememberMe" />
            {t("auth.login.rememberMe")}
          </label>

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
              <ErrorMessage name="code" component="div" className={s.error} />
              <div className={s.timer}>
                {t("auth.timerText.text")} {timer} {t("auth.timerText.sec")}
              </div>
            </>
          ) : null}

          <button type="submit" className={s.button}>
            {isCodeSent ? t("auth.acceptCode") : t("auth.login.email")}
          </button>
        </Form>
      )}
    </Formik>
  );
};

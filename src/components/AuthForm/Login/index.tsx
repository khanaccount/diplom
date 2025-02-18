import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./index.module.scss";

export const LoginForm: React.FC = () => {
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    if (isCodeSent && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCodeSent, timer]);

  const validationSchema = Yup.object({
    email: Yup.string().email("Неверный email").required("Обязательное поле"),
    password: Yup.string().required("Обязательное поле"), // Убрано требование 6 символов
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
            <Field type="email" name="email" placeholder="Email" className={s.input} />
            <ErrorMessage name="email" component="div" className={s.error} />
          </div>

          <div className={s.inputBlock}>
            <Field type="password" name="password" placeholder="Пароль" className={s.input} />
            <ErrorMessage name="password" component="div" className={s.error} />
          </div>

          <label className={s.rememberMe}>
            <Field type="checkbox" name="rememberMe" />
            Запомнить меня
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
                    onChange={(e: { target: { value: string } }) => {
                      const newCode = [...values.code];
                      newCode[index] = e.target.value.replace(/[^0-9]/g, "");
                      setFieldValue("code", newCode);
                    }}
                  />
                ))}
              </div>
              <ErrorMessage name="code" component="div" className={s.error} />
              <div className={s.timer}>Отправлено. Повторная отправка через: {timer} сек</div>
            </>
          ) : null}

          <button type="submit" className={s.button}>
            {isCodeSent ? "Подтвердить вход" : "Получить код"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

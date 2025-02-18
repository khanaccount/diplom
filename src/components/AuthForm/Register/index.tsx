import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./index.module.scss";

export const RegisterForm: React.FC = () => {
  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Минимум 2 символа").required("Обязательное поле"),
    email: Yup.string().email("Неверный email").required("Обязательное поле"),
    password: Yup.string().min(6, "Минимум 6 символов").required("Обязательное поле"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log("Регистрация:", values)}
    >
      {() => (
        <Form className={s.registerForm}>
          <Field type="text" name="name" placeholder="Имя" className={s.input} />
          <ErrorMessage name="name" component="div" className={s.error} />

          <Field type="email" name="email" placeholder="Email" className={s.input} />
          <ErrorMessage name="email" component="div" className={s.error} />

          <Field type="password" name="password" placeholder="Пароль" className={s.input} />
          <ErrorMessage name="password" component="div" className={s.error} />

          <button type="submit" className={s.button}>
            Зарегистрироваться
          </button>
        </Form>
      )}
    </Formik>
  );
};

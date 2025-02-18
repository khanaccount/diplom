import { useState } from "react";
import s from "./index.module.scss";
import { LoginForm } from "./Login";
import { RegisterForm } from "./Register";

export const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={s.authWrapper}>
      <div className={s.authContainer}>
        <h2 className={s.authTitle}>{isLogin ? "Вход" : "Регистрация"}</h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <p className={s.toggle} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Нет аккаунта? Зарегистрируйтесь" : "Уже есть аккаунт? Войти"}
        </p>
      </div>
    </div>
  );
};

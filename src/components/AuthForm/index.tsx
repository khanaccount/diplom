import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import s from "./index.module.scss";
import { LoginForm } from "./Login";
import { RegisterForm } from "./Register";
import { useTranslation } from "react-i18next";

export const AuthForm: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Получаем query-параметр из URL
  const query = new URLSearchParams(location.search);
  const mode = query.get("mode"); // mode=login или mode=register
  const isLogin = mode !== "register"; // Если нет register, то показываем логин

  // Если mode отсутствует, добавляем ?mode=login в URL
  useEffect(() => {
    if (!mode) {
      navigate("?mode=login", { replace: true });
    }
  }, [mode, navigate]);

  return (
    <div className={s.authWrapper}>
      <div className={s.authContainer}>
        <h2 className={s.authTitle}>
          {isLogin ? t("auth.login.title") : t("auth.register.title")}
        </h2>
        {isLogin ? <LoginForm /> : <RegisterForm />}
        <p className={s.toggle} onClick={() => navigate(`?mode=${isLogin ? "register" : "login"}`)}>
          {isLogin ? t("auth.noAccount") : t("auth.haveAccount")}
        </p>
      </div>
    </div>
  );
};

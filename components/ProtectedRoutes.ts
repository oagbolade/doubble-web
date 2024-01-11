import { appRoutes } from "./constants";
import { useAppSelector } from "../src/redux/hooks";

const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, children }) => {
  const { auth } = useAppSelector((state) => state.auth);

  const unprotectedRoutes = [
    appRoutes.LOGIN_PAGE,
    appRoutes.HOME,
    appRoutes.FORGOT_PASSWORD,
    appRoutes.RESET_PASSWORD,
    appRoutes.REGISTER,
    appRoutes.ABOUT,
    appRoutes.FAQ,
    appRoutes.OTP,
    appRoutes.TERMS,
    appRoutes.WELCOME_BACK,
    appRoutes.NEW_DEVICE,
    appRoutes.TEST,
  ];

  const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !auth && pathIsProtected) {
    router.push(appRoutes.LOGIN_PAGE);
  }

  return children;
};

export default ProtectedRoute;

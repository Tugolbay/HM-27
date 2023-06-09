import { useCallback, useState } from "react";
import { Header } from "../components/header/Header";
import { Basket } from "../components/basket/Basket";
import { useDispatch, useSelector } from "react-redux";
import { ActionsTypeSnackbar } from "../store/snackbar/snackbar";
import { SnackbarMui } from "../components/UI/snackbar/Snackbar";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  const [toggle, setToggle] = useState(false);
  const { open } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const onCloseHandler = () => {
    dispatch(ActionsTypeSnackbar.closeSnackbar());
  };

  const toggleHandler = useCallback(() => {
    setToggle((prev) => !prev);
  }, []);
  return (
    <div>
      {open && <SnackbarMui onClose={onCloseHandler} />}
      <Header toggleHandler={toggleHandler} />
      {toggle && <Basket toggleHandler={toggleHandler} toggle={toggle} />}
      <div>
        <Outlet />
      </div>
    </div>
  );
};

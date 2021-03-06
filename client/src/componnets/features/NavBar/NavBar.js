import { Link } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import { Menu, Avatar, Button } from "antd";
import "antd/dist/antd.css";
import "./navBar.css";
import "antd/dist/antd.css";
import ContactU from "../../pages/ContactUs/ContactUs";
import i18next from "i18next";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { lang } from "../../../i18next/I18next";
import { AuthContext } from "../../../contexts/AuthContextProvider";
import { getAllAdmins } from "../../../service/admin-service";
import Profile from "../Forms/FormsTemporary/Profile";
import { Redirect } from "react-router";

const NavBar = () => {
  const { isLogin, logout } = useContext(AuthContext);
  const { t } = useTranslation();
  const currentLangCode = cookies.get("i18next") || "heb";
  const currentLang = lang.find((i) => i.code === currentLangCode);
  const [btnLanguage, setBtnLanguage] = useState("ENG");

  // useEffect(() => {
  //   document.body.dir = currentLang.dir || "rtl";
  //   document.title = t("app_title");
  // }, [currentLang, t]);
  // const changeLanguage = (code, name) => {
  //   i18next.changeLanguage(code);

  // };

  const changingBtnLanguage = (e) => {
    e.target.innerText === "HEB"
      ? setBtnLanguage("ENG")
      : setBtnLanguage("HEB");

    if (currentLangCode === "heb") {
      i18next.changeLanguage("en");
    } else {
      i18next.changeLanguage("heb");
    }
  };

  const logoutAdmin = () => {
    logout();
    return <Redirect to="/form" />;
  };

  return (
    <div className="navBar">
      {isLogin && <Profile />}

      <Link to="../">
        <Avatar className="logo" src="./logo-main.jpg" alt="logo"></Avatar>
      </Link>

      <Menu className="navBarLinks" mode="horizontal">
        <Menu.Item className="menu-item">
          <Button onClick={changingBtnLanguage}> {btnLanguage}</Button>
        </Menu.Item>

        {isLogin && (
          <Link to="/Admin/Management">
            <Menu.Item className="menu-item">{t("adminPage")}</Menu.Item>
          </Link>
        )}

        <Link to="/">
          <Menu.Item>
            <div className="navbar-left-side">
              <div className=""></div>
              {!isLogin && (
                <Link to="/ContactU">
                  <Menu.Item className="menu-item-contact">
                    {t("Contact Us")}
                  </Menu.Item>
                </Link>
              )}
            </div>
          </Menu.Item>
        </Link>
        <Link to="/CommerceJs">
          <Menu.Item className="menu-item">{t("Store")}</Menu.Item>
        </Link>

        <Link to="/AboutUs">
          {" "}
          <Menu.Item className="menu-item">{t("About us")}</Menu.Item>
        </Link>
      </Menu>
    </div>
  );
};

export default NavBar;

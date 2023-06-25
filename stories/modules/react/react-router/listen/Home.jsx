import { useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(localStorage.getItem("isLogin") === "true");
  }, []);

  const onLogin = () => {
    setIsLogin(true);
    localStorage.setItem("isLogin", true);
  }

  const onLogout = () => {
    setIsLogin(false);
    localStorage.removeItem("isLogin");
  }

  return (
    <div>
      <div>Home 页面</div>
      <div>
        <div>
          <span>登录可看：<Link className="mr-2" to="/a">PageA</Link></span>
        </div>
        <div>
          <span>访客可看：<Link to="/b">PageB</Link></span>
        </div>
        <div>
          <div>登录状态：{`${isLogin}`}</div>
          {isLogin ?
            <Button type="primary" ghost danger onClick={onLogout}>退出</Button> :
            <Button type="primary" onClick={onLogin}>登录</Button>
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
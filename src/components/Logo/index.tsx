/**
 * 탈잉 Biz 로고 컴포넌트
 */
const LogoComponent = () => {
  return (
    <div
      className="h-6 w-12 sm:h-7 sm:w-12"
      style={{
        backgroundImage:
          "url(https://front-img.taling.me/Content/app3/img/logo/img-logo-black-66.png)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default LogoComponent;

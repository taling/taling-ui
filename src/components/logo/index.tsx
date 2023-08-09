/**
 * 탈잉 Biz 로고 컴포넌트
 */
const LogoComponent = ({ size = "sm" }: { size?: "sm" | "md" | "lg" }) => {
  const sizeMap = {
    sm: "h-7 w-12 sm:h-7 sm:w-12",
    md: "h-10 w-16 sm:h-10 sm:w-16",
    lg: "h-12 w-20 sm:h-12 sm:w-20",
  };
  return (
    <div
      className={sizeMap[size]}
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

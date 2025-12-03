import style from "./clientView.module.css"
import Logo from "./global/assets/logo.svg"

export const ClientView = () => {
  return (
    <div className={style.container}>
      <img className={style.logo} src={Logo} alt="Logo" />

      {/* Build out here */}
    </div>
  )
}

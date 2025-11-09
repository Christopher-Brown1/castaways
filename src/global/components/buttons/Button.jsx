import style from "../buttons/button.module.css"

export function Button({ onClick, children, variant = "primary" }) {
  const variantStyle = {
    primary: {
      backgroundColor: "var(--system-blue)",
      color: "var(--system-black)",
    },
  }
  return (
    <button
      className={style.button}
      onClick={onClick}
      style={variantStyle[variant]}
    >
      {children}
    </button>
  )
}

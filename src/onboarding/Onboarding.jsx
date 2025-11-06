import style from "../onboarding/Onboarding.module.css"

import { Button } from "../global-components/Button.jsx"

import logo from "../assets/logo.png"

export const Onboarding = ({ setStep }) => {
  // const [tribeSwapEnabled, setTribeSwapEnabled] = useState(false)

  return (
    <>
      <div className={style.onboardingContainer}>
        <img src={logo} alt='App Logo' style={{ width: "381px" }} />
        <p className={style.onboardingText}>
          Welcome to Castaways, the second best game on earth. To begin, choose
          your desired settings and click “Start Game”
        </p>
        <div className={style.settingsContainer}>
          {/* tribe swap switch */}
          {/* <div className={style.settingOption}>
            <p className={style.settingText}>Enable Tribe Swap Card</p>

            <label className={style.switch}>
              <input
                type='checkbox'
                checked={tribeSwapEnabled}
                onChange={() => setTribeSwapEnabled(!tribeSwapEnabled)}
              />
              <span className={style.slider}></span>
            </label>
          </div> */}

          {/* Create a castaway switch */}
          {/* <div className={style.settingOption}>
            <p className={style.settingText}>Create a Castaway</p>
            <label className={style.switch}>
              <input type='checkbox' />
              <span className={style.slider}></span>
            </label>
          </div> */}

          {/* Strategy Timer switch */}
          {/* <div className={style.settingOption}>
            <p className={style.settingText}>Auto Strategy Timer</p>
            <label className={style.switch}>
              <input type='checkbox' />
              <span className={style.slider}></span>
            </label>
          </div> */}
        </div>
        <Button onClick={() => setStep("enterGame")} variant='primary'>
          Start Game
        </Button>
      </div>
    </>
  )
}

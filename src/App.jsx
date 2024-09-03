import HomeMenu from "./components/homeMenuComponents"
import SideMenu from "./components/sideMenuComponents"
import './App.css'

function App() {

  return (
    <div className='App d-flex mx-5'>
      <SideMenu/>
      <div className="vertical-divider"></div>
      <HomeMenu/>
      <div className="vertical-divider"></div>

    </div>
  )
}

export default App
  
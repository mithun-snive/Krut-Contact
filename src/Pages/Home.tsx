import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
function Home() {
  
  const backgroundImageStyle = {
    backgroundColor: 'black',
    backgroundImage: `url("/images/background.png")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };


  return (
   <div className="min-h-screen" style={backgroundImageStyle}>
    <Header/>
    <Main/>
   </div>
  )
}

export default Home
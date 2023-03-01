import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';
import logo from './Assets/Logo.png'
import  useOpenAI  from './Hooks/useOpenAI';

function App() {

  const {resetResponses} = useOpenAI()

  return (
    <Wrapper>
      <NavBar>
        <LogoImg  src={logo} alt="Logo" />
        <ClearBtn onClick={() => resetResponses()}>Clear</ClearBtn>
      </NavBar>
      
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  )
}

export default App;

const Wrapper = tw.div`fixed w-screen h-screen bg-zinc-800`
const NavBar = tw.nav`flex items-center px-4 py-2 bg-zinc-900 justify-between`
const Content = tw.div`mx-auto max-w-7xl mt-4 h-full text-white`
const LogoImg = tw.img`h-20 w-[15rem]`



const ClearBtn = tw.button`bg-blue-600 text-white px-4 py-2 rounded-md text-lg font-bold mr-4`

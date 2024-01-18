import "./App.css";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import ThumbNail from "./components/ThumbNail";
import Avatar from "./components/Avatar";
import HomeIcon from "./components/Icons/HomeIcon";
import LogoIcon from "./components/Icons/LogoIcon";
import BookIcon from "./components/Icons/BookIcon";
import BookMarkIcon from "./components/Icons/BookMarkIcon";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import { createBrowserRouter } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);
  return (
    <>
      {/* <Button>Login to your account</Button>
      <TextInput>Email address</TextInput>
      <ThumbNail src="/ballet-lesson.jpeg" />
      <ThumbNail src="/daddy-pigs-office.jpeg" />
      <Avatar />
      <HomeIcon />
      <HomeIcon isActive={true} />
      <LogoIcon />
      <LogoIcon variant="login" />
      <BookIcon />
      <BookIcon isActive />
      <BookMarkIcon />
      <BookMarkIcon isActive />
      <NavBar /> */}
      <Layout />
    </>
  );
}

export default App;

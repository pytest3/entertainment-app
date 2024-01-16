import "./App.css";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import TextInput from "./components/TextInput";
import { Search } from "lucide-react";
import ThumbNail from "./components/ThumbNail";
import Avatar from "./components/Avatar";
import HomeIcon from "./components/Icons/HomeIcon";
import LogoIcon from "./components/Icons/LogoIcon";
import BookIcon from "./components/Icons/BookIcon";
import BookMarkIcon from "./components/Icons/BookMarkIcon";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Button>Login to your account</Button>
      <TextInput>Email address</TextInput>
      <SearchBar icon={Search}>Search for movies or TV series</SearchBar>
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
      <NavBar />
    </>
  );
}

export default App;

import "./App.css";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import List from "./components/generics/List";
import CustomButton from "./html/CustomButton";
import { RandomNumber } from "./restriction/RandomNumber";
import Toast from "./templateLiterals/Toast";
// import Button from "./components/Button";
// import Container from "./components/Container";
// import Box from "./components/context/Box";
// import { ThemeContextProvider } from "./components/context/ThemeContext";
// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Input from "./components/Input";
// import Oscar from "./components/Oscar";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./Status";

// const personName = {
//   first: "Bilal",
//   last: "Shabbir",
// };

// const namesList = [
//   {
//     first: "Bilal",
//     last: "Shabbir",
//   },
//   {
//     first: "Zeeshan",
//     last: "Shabbir",
//   },
//   {
//     first: "Salman",
//     last: "Shabbir",
//   },
// ];

function App() {
  return (
    <>
      {/* <Greet name='Ahsan' isLogged={false} /> */}
      {/* <Person name={personName} />
      <PersonList names={namesList} /> */}
      {/* <Status status='loading' /> */}
      {/* <Heading>PlaceHolder</Heading>
      <Oscar>
        <Heading>Why</Heading>
      </Oscar> */}
      {/* <Button handleClick={(event, id) => console.log("Helo ", event, id)} /> */}

      {/* <Input value='' handleChange={(event) => console.log(event)} /> */}
      {/* <Container styles={{ border: "1px solid black" }} /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <List items={["Ahsan", "Bilal"]} onClick={(item) => console.log(item)} />
      <List items={[2, 1]} onClick={(item) => console.log(item)} /> */}
      {/* <RandomNumber value={10} isPositive /> */}
      {/* <Toast position='left-top' /> */}
      <CustomButton variant='primary' onClick={() => console.log("Hello")}>
        Hii
      </CustomButton>
    </>
  );
}

export default App;

import React from "react";
import {render} from "react-dom";
import Link from "./components/Link";
import Container from "./components/Container.js";
import Button from "./components/Button.js";
import Input from "./components/Input.js";

function App() {
    return (<>
        <Container className="app">
            <Link href="https://react-tutorial.app" tabindex='2'>React Tutorial</Link>
            <Button disabled={true}>Login</Button>
            <Input placeholder="Full Name" name="full_name" />
        </Container>
    </>);
}

render(<App />, document.querySelector("#react-root"));

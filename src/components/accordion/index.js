import { createContext, useContext, useState } from "react";
import {
  Item,
  Container,
  Title,
  Frame,
  List,
  Head,
  Body,
} from "./styles/accourdion";

const AccordionContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Item {...restProps}>
      <Container>{children}</Container>
    </Item>
  );
}

Accordion.Title = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Frame = ({ children, ...restProps }) => {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Head = function AccordionHead({ children, ...restProps }) {
  const { toggleShow } = useContext(AccordionContext);

  return (
    <Head {...restProps}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Head>
  );
};
Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(AccordionContext);
  return toggleShow ? <Body {...restProps}>{children}</Body> : null;
};

Accordion.List = function AccordionList({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <AccordionContext.Provider value={{ toggleShow, setToggleShow }}>
      <List onClick={() => setToggleShow(!toggleShow)} {...restProps}>
        {children}
      </List>
    </AccordionContext.Provider>
  );
};

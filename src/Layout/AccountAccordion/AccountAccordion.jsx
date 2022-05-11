import React from "react";
import "../AccountAccordion/AccountAccordion.scss";
import {
  //Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import {Accordion} from "react-bootstrap";

import "react-accessible-accordion/dist/fancy-example.css";

function AccountAccordion(props) {
  return (
    // <Accordion className="Accordion_account">
    //   <AccordionItem>
    //     <AccordionItemHeading>
    //       <AccordionItemButton>{props.title}</AccordionItemButton>
    //     </AccordionItemHeading>
    //     <AccordionItemPanel>{props.content}</AccordionItemPanel>
    //   </AccordionItem>
    // </Accordion>

    <Accordion className="Accordion_account ">
      <Accordion.Item eventKey={props.no}>
        <Accordion.Header>{props.title}</Accordion.Header>
        <Accordion.Body>{props.content}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccountAccordion;

import { Accordion } from "../components";
import OptForm from "../components/otp-form";
import faqData from "../fixtures/faq.json";

export const AccordionContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      <Accordion.Frame>
        {faqData.map((element) => (
          <Accordion.List key={element.id}>
            <Accordion.Head>{element.header}</Accordion.Head>
            <Accordion.Body>{element.body}</Accordion.Body>
          </Accordion.List>
        ))}
      </Accordion.Frame>

      <OptForm.Text>
        Ready to watch? Enter your email to create or restart your membership.
      </OptForm.Text>
      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
      </OptForm>
    </Accordion>
  );
};

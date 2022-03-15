import { AccordionContainer } from "../containers/Accordion";
import { FooterContainer } from "../containers/Footer";
import HeaderContainer from "../containers/Header";
import { JumbotronContainer } from "../containers/Jumbotron";
import { Feature, OtpForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
          <OtpForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OtpForm.Text>
          <OtpForm>
            <OtpForm.Input placeholder="Email address" />
            <OtpForm.Button>Try it now</OtpForm.Button>
            <OtpForm.Break />
          </OtpForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <AccordionContainer />
      <FooterContainer />
    </>
  );
}

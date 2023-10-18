import React from "react";
import {
  Container,
  Header,
  Image,
  ImageContainer,
  Section,
  StyledNavLink,
  Text,
  TextContainer,
  TextTime,
} from "./Home.styled";
import image1 from "../../images/car1.jpg";
import image2 from "../../images/car2.jpg";
import image3 from "../../images/car3.jpg";

export default function Home() {
  return (
    <Section>
       <Container>
      <Header>Аренда авто в Україні</Header>
      <ImageContainer>
        <Image src={image1} alt="Авто 1" />
        <TextContainer>
          <Text>
            Подорожуйте Україною на власному автомобілі. Здійснюйте мрійні
            подорожі, а ми допоможемо вам знайти ідеальне авто для ваших пригод.
          </Text>
        </TextContainer>
      </ImageContainer>
      <ImageContainer>
        <TextContainer>
          <Text>
            Орендуйте авто і насолоджуйтесь свободою подорожувати по всій
            Україні. Наші автомобілі готові вивести вас на найкращі місця та
            маршрути країни.
          </Text>
        </TextContainer>
        <Image src={image2} alt="Авто 2" />
      </ImageContainer>
      <ImageContainer>
        <Image src={image3} alt="Авто 3" />
        <TextContainer>
          <Text>
            Оберіть свій ідеальний автомобіль та розпочніть захоплюючу подорож
            Україною вже сьогодні.
          </Text>
        </TextContainer>
      </ImageContainer>

      <TextTime>
        Час обрати своє авто
        <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      </TextTime>
    </Container>
   </Section>
  );
}

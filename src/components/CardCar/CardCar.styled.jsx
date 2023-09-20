import styled from "styled-components";
import { colors, sizes, fonts } from "../../vars";

export const CardContainer = styled.div`
  width: ${sizes.cardWidth};
  height: ${sizes.cardHeight};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const CardHeader = styled.div`
  width: ${sizes.cardWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${sizes.cardHeaderMarginTop};
  margin-bottom: ${sizes.cardHeaderMarginBottom};

  font-size: ${fonts.cardHeaderFontSize};
  line-height: ${fonts.cardHeaderLineHeight};
`;

export const CardModal = styled.span`
  color: ${colors.primaryColor};
`;

export const FavoriteButton = styled.button`
  background-color: transparent;
  font-size: ${fonts.favoriteButtonFontSize};
  border: none;
  position: absolute;
  top: ${sizes.favoriteButtonTop};
  right: ${sizes.favoriteButtonRight};
  color:#FFFF;

  cursor: pointer;

  &:hover {
    color: ${colors.primaryColor};
    transition: color 0.3s ease-in-out;
  }
`;

export const CarImage = styled.img`
  width: ${sizes.carImageWidth};
  min-height: ${sizes.carImageMinHeight};
  border-radius: ${sizes.carImageBorderRadius};
  object-fit: cover;
`;

export const CarDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const CarInfo = styled.div`
  width: ${sizes.carInfoWidth};
  height: ${sizes.carInfoHeight};
  display: flex;
  flex-wrap: wrap;
  span {
    color: ${colors.secondaryTextColor};
    font-size: ${fonts.carInfoFontSize};
    line-height: ${fonts.carInfoLineHeight};
  }
  span:not(:last-child)::after {
    content: " | ";
    color: ${colors.infoSeparatorColor};
    margin-right: ${sizes.infoSeparatorMarginRight};
    margin-left: ${sizes.infoSeparatorMarginLeft};
  }
`;

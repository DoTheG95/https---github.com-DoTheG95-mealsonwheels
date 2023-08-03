import React from "react";
import { styled } from "styled-components/native";
import { space } from "../../infrastructure/theme/spaces";

const sizeVariant = {
    small: 1,
    medium: 2,
    large: 3,
};

const positionVariant = {
    top:"padding-top",
    bottom:"margin-bottom",
    left:"margin-left",
    right:"margin-right",
};

const getVariant = (position, size, theme) => {
    const sizeIndex = sizeVariant[size];
    const spaceDirection = positionVariant[position];
    const value = theme.space[sizeIndex];
    console.log(`${spaceDirection}:${value}`);
    return`${spaceDirection}:${value}`;
};

export const Spacer = styled.View`
    ${({position, size, theme}) => getVariant(position, size, theme)}
`;

Spacer.defaultProps = {
    position: "top",
    size: "small",
}
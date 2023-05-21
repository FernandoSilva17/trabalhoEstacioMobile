import { LinearGradient } from 'expo-linear-gradient';
import styled from "styled-components";

export const Container = styled(LinearGradient).attrs({
  colors: ["#B0C4DE", "#ffffff", "#B0C4DE"]
})`
  flex: 1;
`;


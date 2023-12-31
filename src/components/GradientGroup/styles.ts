import { styled } from 'styled-components'

interface GradientColor {
  color: string
}

export const FirstGradientCircle = styled.div<GradientColor>`
  border-radius: 50%;
  position: absolute;
  z-index: -1;

  width: 1600px;
  height: 1600px;
  left: -600px;
  background: radial-gradient(circle, ${(props) => props.color} 27%, #0000 65%);
`

export const SecondGradientCircle = styled.div<GradientColor>`
  border-radius: 50%;
  position: absolute;
  z-index: -2;

  width: 1400px;
  height: 1400px;
  left: 300px;
  top: 10px;
  background: radial-gradient(circle, ${(props) => props.color} 27%, #0000 65%);
`

export const ThirdGradientCircle = styled.div<GradientColor>`
  border-radius: 50%;
  position: absolute;
  z-index: -3;

  width: 1100px;
  height: 1100px;
  left: 550px;
  top: -500px;
  background: radial-gradient(circle, ${(props) => props.color} 5%, #0000 70%);
`

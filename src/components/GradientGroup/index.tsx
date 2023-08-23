import {
  FirstGradientCircle,
  SecondGradientCircle,
  ThirdGradientCircle,
} from './styles'

interface GradientGroupProps {
  colors: string[]
}

export function GradientGroup({ colors }: GradientGroupProps) {
  return (
    <>
      <FirstGradientCircle color={colors[0]} />
      <SecondGradientCircle color={colors[1]} />
      <ThirdGradientCircle color={colors[2]} />
    </>
  )
}

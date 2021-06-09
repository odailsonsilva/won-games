import React from 'react'
import * as S from './styles'

export type RibbonColor = 'primary' | 'secondary'
export type RibbonSizes = 'normal' | 'small'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColor
  size?: RibbonSizes
}

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <S.Wrapper color={color} size={size}>
      {children}
    </S.Wrapper>
  )
}

import { css } from "styled-components"
import colors from "./colors"

export const body = css`
  font-family: "Inter", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: ${colors.slateDark};
`

export const bodyBold = css`
  ${body}
  font-weight: 550;
`

export const h1 = css`
  ${body}
  font-weight: 700;
  font-size: 58px;
  line-height: 68px;
`

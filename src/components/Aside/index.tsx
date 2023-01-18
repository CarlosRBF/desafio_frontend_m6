import { string } from "yup"

export const TextAside = (props: { p: string; span: string }) => {
  return (
    <p>
      {props.p}

      <span>{props.span}</span>
    </p>
  )
}

import { useEffect, useState, ReactNode } from "react";
import { api } from "../services/request";

// import * as yup from "yup"

// let schema = yup.object().shape({
//   amount: yup.number().required(),
//   installments: yup.number().required(),
//   mdr: yup.number().required(),
// })

// schema.isValid({
//     amount: 1, 

// })

interface PropsData {
    children: ReactNode;
  }

function TypesProvider({children}: PropsData) {
    const [response, setResponse] = useState()
}

useEffect(() => {
    api.get("/amount")
})
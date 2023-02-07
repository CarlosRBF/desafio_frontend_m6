import { useEffect, useState, ReactNode } from "react";
import { api } from "../services/request";

interface PropsData {
    children: ReactNode;
  }

function TypesProvider({children}: PropsData) {
    const [response, setResponse] = useState()
}

useEffect(() => {
    api.get("/amount")
})
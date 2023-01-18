import { Aside, Main, Container, ContainerDiv, Form, Inputs } from "./style"

import { Label } from "../../components/Label"
import { TextAside } from "../../components/Aside"

import { useEffect, useState } from "react"

import { api } from "../../services/request"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Schema } from "../../services/yup"

import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

interface IResponse {
  1: number
  15: number
  30: number
  90: number
}

export const HomePage = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [result, setResult] = useState({} as IResponse)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  })

  const onSubmitHandler = async (data: any) => {
    await api
      .post<IResponse>("", {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
      })
      .then((res) => setResult(res.data))
      .catch((err) => {
        console.error("Ops! Aconteceu um erro inesperado" + err)
      })
  }

  useEffect(() => {
    const handleStatus = () => {
      setIsOnline(navigator.onLine)

      isOnline
        ? toast.error("Sem conexão !", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          })
        : toast.success("Conectado!", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
          })
    }
    window.addEventListener("online", handleStatus)

    window.addEventListener("offline", handleStatus)

    return () => {
      window.removeEventListener("online", handleStatus)
      window.removeEventListener("offline", handleStatus)
    }
  }, [isOnline])

  return (
    <Main>
      <Container>
        <ContainerDiv>
          <h1>Simule sua Antecipação</h1>
          <Form onSubmit={handleSubmit(onSubmitHandler)}>
            <Label htmlFor="venda" text="Informe o valor da sua venda *" />
            <Inputs
              id="venda"
              type="number"
              placeholder="Digite o valor da venda"
              {...register("amount")}
            />
            <p className="message__error">
              {errors.amount?.message?.toString()}
            </p>

            <Label htmlFor="parcelas" text="Em quantas parcelas *" />
            <Inputs
              id="parcelas"
              type="number"
              placeholder="Digite o número de parcelas"
              {...register("installments")}
            />
            <p className="message__error">
              {errors.installments?.message?.toString()}
            </p>

            <Label htmlFor="mdr" text="Informe o percentual de MDR *" />
            <Inputs
              id="mdr"
              type="number"
              placeholder="Percentual de MDR"
              {...register("mdr")}
            />
            <p className="message__error">{errors.mdr?.message?.toString()}</p>

            <button hidden>clique</button>
          </Form>
        </ContainerDiv>

        <Aside>
          <h2>VOCÊ RECEBERÁ:</h2>

          <TextAside p="Amanhã:" span={`R$ ${result[1] ? result[1] : 0}`} />

          <TextAside
            p="Em 15 dias:"
            span={`R$ ${result[15] ? result[15] : 0}`}
          />

          <TextAside
            p="Em 30 dias:"
            span={`R$ ${result[30] ? result[30] : 0}`}
          />

          <TextAside
            p="Em 90 dias:"
            span={`R$ ${result[90] ? result[90] : 0}`}
          />
        </Aside>
      </Container>
    </Main>
  )
}

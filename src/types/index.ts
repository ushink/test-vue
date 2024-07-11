export interface AuthForm {
  name: string
  email: string
  password: string
}

export interface Quiz {
  id: number
  title: string
  questionText: string
  options: string[]
  right: string[]
}

type EMAIL = {
  VALUE: string
}

export interface User {
  ID: number
  NAME: string
  EMAIL: EMAIL[]
  COMMENTS: string
}

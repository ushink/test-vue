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

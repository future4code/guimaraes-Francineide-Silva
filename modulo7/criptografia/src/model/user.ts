export type user = {
   id: string
   email: string
   password: string
   name: string
   nickname: string
}

export interface UserInputDTO {
   name: string,
   nickname: string,
   email: string,
   password: string
}

export interface EditUserInputDTO {
   
   name: string,
   nickname: string,
   email: string,
   token: string
}

export interface EditUserInput {
   name: string,
   nickname: string,
   id: string
   email: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}
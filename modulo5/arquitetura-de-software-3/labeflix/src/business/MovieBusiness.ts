import { MovieDatabase } from "../data/MovieDatabase"
import {  generateId } from "../services/generateId"
import { MovieInputDTO } from "../model/MovieDTO"
import { Movie } from "../model/Movie"



export class MovieBusiness {

  public createMovie = async (input: MovieInputDTO)=>{

    try {

      const { title, description, durationInMinutes, yearOfRelease } = input

      if (!title || !description || !durationInMinutes || !yearOfRelease) {

        throw new Error("Dados inválidos (title, description, durationInMinutes, yearOfRelease)")
      }

      const id = generateId()

      const movieDatabase = new MovieDatabase()
      await movieDatabase.createMovie({
        
        id,
        title,
        description,
        durationInMinutes,
        yearOfRelease,
      })
      
    } catch (error:any) {
      throw new Error(error.message)
      
    }
  }
    async findAll(): Promise<Movie[]> {
      const result = await MovieDatabase.findAll();
      return result;
    }

}


  

    
   

    

    
  
  




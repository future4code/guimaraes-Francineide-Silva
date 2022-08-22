import { BaseDatabase } from "./BaseDatabase";
import {MovieInputDTO} from '../model/MovieDTO'
import { MovieBusiness } from "../business/MovieBusiness";
import {Movie} from '../model/Movie'

export class MovieDatabase extends BaseDatabase {

  private static TABLE_NAME = "LABEFLIX_MOVIE";
  static findAll: any;

  async createMovie({ id, title,  description, durationInMinutes, yearOfRelease }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes:durationInMinutes,
        year_of_release: yearOfRelease,
      })
      .into(MovieDatabase.TABLE_NAME);
  }

  async findAll(): Promise<Movie[]> {
    const movies = await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
    const result = movies.map((movie: { id: string; title: string;  description: string; durationInMinutes: number; yearOfRelease:number  })=> new Movie(movie.id, movie.title, movie.description, movie.durationInMinutes, movie.yearOfRelease))
    return result
}
}
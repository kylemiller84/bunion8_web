import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {

  movies : Array<Movie>

  outputData(){
    console.log(this.movies);
  }

  getMovies(){
    this.movieService.getMovies()
    .subscribe(data => this.movies = data);
  }

  constructor(private movieService : MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

}

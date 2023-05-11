import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';
import { MovieService } from '../movie.service';
import { Imovie } from '../imovie';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()   movieId = ''; 
  @Output()  movie : EventEmitter<Imovie> = new EventEmitter<Imovie>();
  constructor(private MovieService: MovieService) { }
  public listmovie: Imovie | undefined ;

  ngOnInit(): void {
  }

  // addNewItem() {
  //   this.itemEvent.emit("value");
  // }
  getMovieById(){
    if(this.movieId){
      this.MovieService.getDatabyId(this.movieId).subscribe(res => {
        this.listmovie = JSON.parse(JSON.stringify(res));
        console.log(this.listmovie);
        this.movie.emit(this.listmovie);
      })
    }
  }
}

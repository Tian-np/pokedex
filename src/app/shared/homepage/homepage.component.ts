import { Component, Input, SimpleChanges } from '@angular/core';
import { CallPokeApiService } from 'src/app/service/call-poke-api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  data: any;
  ability: any;
  pokemon: any = [];
  @Input() searchText = '';

  constructor(private callApi: CallPokeApiService) {}

  ngOnInit(): void {
    this.callApi.callPokemon().subscribe(async (res: any) => {
      res.results.forEach((element: any) => {
        this.callApi.callPokemonDetail(element.name).subscribe((res) => {
          this.pokemon.push(res);
        });
      });
    })
    this.callApi.callPokemonApi().subscribe((res) => {
      this.data = res;
    })
    this.callApi.callPokemonAbility().subscribe((res) => {
      this.ability = res;
    })
  }

  
}

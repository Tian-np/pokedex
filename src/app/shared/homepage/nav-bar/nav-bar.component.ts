import { Component } from '@angular/core';
import { CallPokeApiService } from 'src/app/service/call-poke-api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(private callApi: CallPokeApiService) {}
  search(data: any) {
    this.callApi.callPokemonApi();
  }
}

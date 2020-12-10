import { Component, OnInit } from '@angular/core';
import { AlertaService } from '../service/alerta.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome: String
  idade: number
  peso: number

  constructor(
    
    
  ) { }
  
  ngOnInit() {
   
  }

  conta(){
    
    if(this.idade > this.idade){
      alert("Legal você não está acima do peso você está entre 16 e 69 anos, então você pode doar sangue!")
      

    }else{
         alert("Você não pode doar, sua idade não permite!")
    }

  }

 
}

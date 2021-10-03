import { Component, OnInit } from '@angular/core';

import { HomeService } from './shared/home.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private HomeService: HomeService) { }

  ngOnInit() {
  	this.HomeService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean {
  	return this.HomeService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
  	return this.HomeService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
  	return this.HomeService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo.
   *
   * @return void
   */
  iniciarJogo(): void {
  	this.HomeService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar um local no tabuleiro.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
  	this.HomeService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
  	return this.HomeService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
  	return this.HomeService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
  	return this.HomeService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar.
   * 
   * @return number
   */
  get jogador(): number {
  	return this.HomeService.jogador;
  }

  /**
   * Inicia um novo jogo.
   * 
   * @return void
   */
  novoJogo(): void {
  	this.HomeService.novoJogo();
  }

}

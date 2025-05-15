import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
})
export class IndexComponent implements OnInit, OnDestroy {
  carouselSlides = [
    { img: "assets/img/Veyndor.png", alt: "Veyndor" },
    //{ img: "https://img.freepik.com/psd-gratuitas/modelo-de-postagem-de-midia-social-para-carnaval-dia-de-muertos_23-2149225577.jpg?ga=GA1.1.1023178805.1747248891&semt=ais_hybrid&w=740", alt: "Botão" },
    //{ img: "assets/img/component-profile-card.png", alt: "Profile Card" },
    //{ img: "assets/img/component-info-card.png", alt: "Info Card" }
  ];
  carouselIndex = 0;
  private carouselInterval: any;

  products = [
    {
      name: 'Eryndor Valtoren',
      age: 32,
      description: 'Príncipe guerreiro da Casa Valtoren, defensor do norte e comandante dos exércitos reais.',
      img: 'assets/img/characters/EryndorValtoren.png'
    },
    {
      name: 'Lysera Valtoren',
      age: 24,
      description: 'Guardião das magias lunares da Casa Valtoren, estudiosa dos pactos antigos.',
      img: 'assets/img/characters/LyseraValtoren.png'
    },
    {
      name: 'Kaelen Drakemyr',
      age: 45,
      description: 'Rei tirano da Casa Drakemyr, senhor das Terras Ardentes e sedento por conquista.',
      img: 'assets/img/characters/KaelenDrakemyr.png'
    },
    {
      name: 'Serenya Drakemyr',
      age: 19,
      description: 'Filha bastarda da Casa Drakemyr, vive como criada sem saber de sua linhagem real.',
      img: 'assets/img/characters/SerenyaDrakemyr.png'
    },
    {
      name: 'Thalor Aerelion',
      age: 29,
      description: 'Cavaleiro da Casa Aerelion, em busca de justiça e vingança pela morte de seu irmão.',
      img: 'assets/img/characters/ThalorAerelion.png'
    },
    {
      name: 'Eliara Aerelion',
      age: 16,
      description: 'Jovem profetisa da Casa Aerelion, carrega visões que moldam o destino dos reinos.',
      img: 'assets/img/characters/EliaraAerelion.png'
    },
    {
      name: 'Velric Mornveil',
      age: 38,
      description: 'Senhor da informação da Casa Mornveil, mestre em espionagem e manipulação.',
      img: 'assets/img/characters/VelricMornveil.png'
    },
    {
      name: 'Maera Mornveil',
      age: 21,
      description: 'Arqueira exilada da Casa Mornveil, agora mercenária que busca vingança.',
      img: 'assets/img/characters/MaeraMornveil.png'
    },
    {
      name: 'Nerion Thalmyra',
      age: 34,
      description: 'Comandante naval da Casa Thalmyra, defensor das Ilhas de Sereia e guardião dos mares.',
      img: 'assets/img/characters/NerionThalmyra.png'
    },
    {
      name: 'Aelira Thalmyra',
      age: 27,
      description: 'Alta Sacerdotisa da Maré Silenciosa, guia espiritual da Casa Thalmyra.',
      img: 'assets/img/characters/AeliraThalmyra.png'
    },
    {
      name: 'Calen Virensyl',
      age: 40,
      description: 'Guardião das florestas da Casa Virensyl, defensor da natureza e do equilíbrio antigo.',
      img: 'assets/img/characters/CalenVirensyl.png'
    },
    {
      name: 'Nymia Virensyl',
      age: 14,
      description: 'Aprendiz de druida da Casa Virensyl, com dons naturais e uma conexão mística com o mundo.',
      img: 'assets/img/characters/NymiaVirensyl.png'
    }
  ];


  ngOnInit(): void {
    this.startAutoSlide();
  }
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }
  prevSlide() {
    this.carouselIndex = (this.carouselIndex - 1 + this.carouselSlides.length) % this.carouselSlides.length;
    this.restartAutoSlide();
  }
  nextSlide() {
    this.carouselIndex = (this.carouselIndex + 1) % this.carouselSlides.length;
    this.restartAutoSlide();
  }
  goToSlide(index: number) {
    this.carouselIndex = index;
    this.restartAutoSlide();
  }
  startAutoSlide() {
    this.carouselInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  stopAutoSlide() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.carouselInterval = null;
    }
  }
  restartAutoSlide() {
    this.stopAutoSlide();
    this.startAutoSlide();
  }
}

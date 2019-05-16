import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Material
import { MaterialModule } from '../app/material/material.module';

// Carrousel
import { DragScrollModule } from 'ngx-drag-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacteristicCardComponent } from './shared/characteristic-card/characteristic-card.component';
import { TabDescriptionComponent } from './shared/tab-description/tab-description.component';
import { HeadingSectionComponent } from './shared/heading-section/heading-section.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeComponent } from './sections/home/home.component';
import { CreditorsComponent } from './sections/creditors/creditors/creditors.component';
import { DevelopersComponent } from './sections/developers/developers/developers.component';
import { HowItWorksComponent } from './sections/how-it-works/how-it-works/how-it-works.component';
import { OriginatorsComponent } from './sections/originators/originators.component';
import { HeaderComponent } from './sections/home/header/header.component';
import { TheNetworkComponent } from './sections/home/the-network/the-network.component';
import { CharacteristicsComponent } from './sections/home/characteristics/characteristics.component';
import { TitleTextComponent } from './shared/title-text/title-text.component';
import { PartnersComponent } from './sections/home/partners/partners.component';
import { NewsComponent } from './sections/home/news/news.component';
import { MeetTheDappComponent } from './sections/home/meet-the-dapp/meet-the-dapp.component';
import { CredHeaderComponent } from './sections/creditors/cred-header/cred-header.component';
import { CredCharacteristicsComponent } from './sections/creditors/cred-characteristics/cred-characteristics.component';
import { LoanPropertiesComponent } from './sections/creditors/loan-properties/loan-properties.component';
import { GettingComponent } from './sections/creditors/getting/getting.component';
import { OriginHeaderComponent } from './sections/originators/origin-header/origin-header.component';
import { OriginCharComponent } from './sections/originators/origin-char/origin-char.component';
import { TypesComponent } from './sections/originators/types/types.component';
import { InterestedComponent } from './sections/originators/interested/interested.component';
import { HowHeaderComponent } from './sections/how-it-works/how-header/how-header.component';
import { UsecasesComponent } from './sections/how-it-works/usecases/usecases.component';
import { AnimatedCubesComponent } from './shared/animated-cubes/animated-cubes.component';
import { AnimatedCubesAnimationComponent } from './shared/animated-cubes/animated-cubes-animation/animated-cubes-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacteristicCardComponent,
    TabDescriptionComponent,
    HeadingSectionComponent,
    FooterComponent,
    MainContainerComponent,
    HomeComponent,
    CreditorsComponent,
    DevelopersComponent,
    HowItWorksComponent,
    OriginatorsComponent,
    HeaderComponent,
    TheNetworkComponent,
    CharacteristicsComponent,
    TitleTextComponent,
    PartnersComponent,
    NewsComponent,
    MeetTheDappComponent,
    CredHeaderComponent,
    CredCharacteristicsComponent,
    LoanPropertiesComponent,
    GettingComponent,
    OriginHeaderComponent,
    OriginCharComponent,
    TypesComponent,
    InterestedComponent,
    HowHeaderComponent,
    UsecasesComponent,
    AnimatedCubesComponent,
    AnimatedCubesAnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    DragScrollModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonSegmentButton, IonButton, IonIcon, IonSegment, IonFooter } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CodigoqrComponent } from "../../components/codigoqr/codigoqr.component";
import { MiclaseComponent } from "../../components/miclase/miclase.component";
import { ForoComponent } from "../../components/foro/foro.component";
import { AppComponent } from 'src/app/app.component';
import { LanguageComponent } from 'src/app/components/language/language.component';
import { addIcons } from 'ionicons';
import { gridOutline, homeOutline, pencilOutline, schoolOutline } from 'ionicons/icons';
import { MisdatosComponent } from 'src/app/components/misdatos/misdatos.component';
import { TranslateModule } from '@ngx-translate/core';
import { AuthService } from 'src/app/services/auth.service';
import { ScannerService } from 'src/app/services/scanner.service';
import { Capacitor } from '@capacitor/core';
import { Asistencia } from 'src/app/model/asistencia';
import { WelcomeComponent } from 'src/app/components/welcome/welcome.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonFooter, IonSegment, IonIcon, IonButton, IonSegmentButton, IonContent, IonHeader, IonTitle,
    IonToolbar,CommonModule,TranslateModule,FormsModule,
    WelcomeComponent,
    HeaderComponent // CGV-Permite usar el componente Header
    ,FooterComponent, CodigoqrComponent, MiclaseComponent, ForoComponent, LanguageComponent,MisdatosComponent]
})
export class InicioPage {

  @ViewChild(FooterComponent) footer!: FooterComponent;
  selectedComponent = 'welcome';

  constructor( private auth: AuthService, private scanner: ScannerService) { 
    addIcons({homeOutline,schoolOutline,pencilOutline,gridOutline});
  }
  ionViewWillEnter() {
    this.changeComponent('welcome');
  }

  async headerClick(button: string){
    if (button === 'scan' && Capacitor.getPlatform() === 'web')
      this.selectedComponent = 'codigoqr';
    if (button === 'scan' && Capacitor.getPlatform() !== 'web')
      this.mostrarAsistencia(await this.scanner.scan());
    
  }

  webQrScanned(qr: string) {
    this.mostrarAsistencia(qr);
  }

  webQrStopped() {
    this.mostrarAsistencia('welcome');
  }

  mostrarAsistencia(qr: string){
    if (Asistencia.codigoQrValido(qr)){
      this.auth.qrCodeData.next(qr);
      this.changeComponent('miclase');
      return;
    }

    this.changeComponent('welcome');
  }

  footerClick(button: string){
    this.selectedComponent = button;
  }

  changeComponent(name: string){
    this.selectedComponent = name;
    this.footer.selectedButton = name;
  }

  @ViewChild('selectLanguage') selectLanguage!: LanguageComponent;

}

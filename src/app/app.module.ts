import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { MainBlockComponent } from './widgets/main-block/main-block.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryModule, GALLERY_CONFIG } from '@ngx-gallery/core';
import { LightboxModule, LIGHTBOX_CONFIG } from '@ngx-gallery/lightbox';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,



  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
    GalleryModule,
    LightboxModule


  ],
  providers: [{
    provide: GALLERY_CONFIG,
    useValue: {
      dots: true,
      imageSize: 'cover'
    }
  }, {
    provide: LIGHTBOX_CONFIG,
    useValue: {
      keyboardShortcuts: false
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

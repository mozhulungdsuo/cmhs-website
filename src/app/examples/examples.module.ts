import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { MainBlockComponent } from 'app/widgets/main-block/main-block.component';
import { AboutComponent } from '../widgets/about/about.component';
import { InfoComponent } from '../widgets/info/info.component';
import { ContactComponent } from '../widgets/contact/contact.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent, MainBlockComponent, AboutComponent, InfoComponent, ContactComponent
    ]
})
export class ExamplesModule { }

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// import { PoModule } from '@po-ui/ng-components';

import { AppComponent } from './app.component';
import { PoModule } from '../../../ui/src/lib';
import { PoMultiselectFilterService } from '../../../ui/src/lib/components/po-field/po-multiselect/po-multiselect-filter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([], { relativeLinkResolution: 'legacy' }), PoModule],
  providers: [PoMultiselectFilterService],
  bootstrap: [AppComponent]
})
export class AppModule {}

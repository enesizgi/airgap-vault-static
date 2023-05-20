import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'

import { ErrorCategory, handleErrorLocal } from '../../services/error-handler/error-handler.service'
import { VaultStorageKey, VaultStorageService } from '../../services/storage/storage.service'

@Component({
  selector: 'airgap-local-authentication-onboarding',
  templateUrl: './local-authentication-onboarding.page.html',
  styleUrls: ['./local-authentication-onboarding.page.scss']
})
export class LocalAuthenticationOnboardingPage {
  constructor(public modalController: ModalController, private readonly storageService: VaultStorageService) {}

  public async authenticate(): Promise<void> {
    await this.storageService.set(VaultStorageKey.DISCLAIMER_HIDE_LOCAL_AUTH_ONBOARDING, true)
    this.modalController.dismiss({ authenticated: true }).catch(handleErrorLocal(ErrorCategory.IONIC_MODAL))
  }
}

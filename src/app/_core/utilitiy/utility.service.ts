import { Injectable } from '@angular/core';
import {TenderTypes} from '../base/tendertypes.model';




@Injectable()
export class UtilityService {
    tenderTypes: TenderTypes[] = [
        { id: 1, name: 'LAR' },
        { id: 2, name: 'LBA' },
        { id: 3, name: 'LCC' },
        { id: 4, name: 'P&B' },
        { id: 5, name: 'Cash' },
        { id: 6, name: 'Check' },
        { id: 7, name: 'Project Card' },
        { id: 8, name: 'Other' }
      ];

constructor() {
  }
  getTender() {
    return this.tenderTypes;
   }

   base64ToBlob(b64Data: any, contentType: any) {
        contentType = contentType || '';
        const sliceSize = 512;
        const byteCharacters = atob(b64Data);
        const byteArrays = [];
        for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
          const slice = byteCharacters.slice(offset, offset + sliceSize);
          const byteNumbers = new Array(slice.length);
          for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
          }
          const byteArray = new Uint8Array(byteNumbers);

          byteArrays.push(byteArray);
        }
        return new Blob(byteArrays, { type: contentType });
    }
  }

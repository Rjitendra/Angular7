import { Injectable } from '@angular/core';

@Injectable()
export class ShareDataService {

    private input: any;

    setValue(param: any) {
        this.input = param;
    }

    getValue() {
        return this.input;
    }
}

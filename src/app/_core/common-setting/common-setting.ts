import { environment } from '../../../environments/environment';


export const COMMON_SETTING = {
    TinymceSetting: {
        skin_url: environment.name === 'prod' ? '/PBM/assets/tinymce/skins/lightgray' :
        '/assets/tinymce/skins/lightgray',
        'branding':  false
    }
};
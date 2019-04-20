import { environment } from 'src/environments/environment';

export default class UrlUtils {
    static api(ending: string): string {
        return environment.apiURL + ending;
    }
}
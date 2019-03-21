import { environment } from 'src/environments/environment';

export default class UrlUtils {
    static generateDbUrl(ending: string): string {
        return environment.databaseURL + ending;
    }
}
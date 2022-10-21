import fs from 'fs';

export default class MovieUtil {
    
    private folderPath = 'C:\\Users\\Eslam\\Desktop\\test';

    public setFolderPath = (path: string) => this.folderPath = path

    public async getAllMovieFS() { 
        try {
            const movies = await fs.promises.readdir(this.folderPath + '/movies');
            return movies;
        } catch {
            return [];
        }
    }

}
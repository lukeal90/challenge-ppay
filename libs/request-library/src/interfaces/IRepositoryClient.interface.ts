export interface IRepositoryClient<T> {
    get(url: string, config?: any): Promise<T>;
    save(url: string, data: any, config?: any): Promise<T>;
}
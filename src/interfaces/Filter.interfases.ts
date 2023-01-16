interface IFilter {
    value: string;
    onFilterArticles: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export type { IFilter };
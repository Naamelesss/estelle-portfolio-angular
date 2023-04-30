export class PortfolioKnowledgePDF {
    lien!: string;
}
export class PortfolioKnowledgeParagraph {
    paragraph!: string;
}
export class PortfolioKnowledge {
    title!: string;
    paragraphs!: PortfolioKnowledgeParagraph[];
    image!: PortfolioKnowledgePDF[];
}

export class PortfolioCVData {
    label!: string;
    place!: string;
    date!: string;
}
export class PortfolioCVBase {
    id!: string;
    name!: string;
    data!: PortfolioCVData[];
}
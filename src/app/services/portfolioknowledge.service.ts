import { Injectable } from "@angular/core";
import { PortfolioCVBase, PortfolioKnowledge, PortfolioKnowledgeParagraph } from "../models/portfolio.model";

@Injectable({
    providedIn: 'root'
})

export class PortfolioKnowledgeService {
    portfolioKnowledge : PortfolioKnowledge[] = [
        {
            title: 'Droit de la famille',
            paragraphs: [
                {
                    paragraph: 'Contrat de mariage'
                },
                {
                    paragraph: 'Mandat de protection futur'
                },
                {
                    paragraph: 'Notoriété'
                },
                {
                    paragraph: 'Requête au tribunal succession vacante'
                }
            ],
            image: [
                {
                    lien: 'df_mariage'
                },
                {
                    lien: 'df_protection'
                },
                {
                    lien: 'df_notoriete'
                },
                {
                    lien: 'df_tribunal'
                }
            ]
        },
        {
            title: 'Droit des sociétés',
            paragraphs: [
                {
                    paragraph: "Cerfa M'BE 16062*02"
                },
                {
                    paragraph: 'Cerfa M3 11683*04'
                }
            ],
            image: [
                {
                    lien: 'ds_cerfa_mbe'
                },
                {
                    lien: 'ds_cerfa_m3'
                }
            ]
        },
        {
            title: 'Droit immobilier',
            paragraphs: [
                {
                    paragraph: 'Mainlevée'
                },
                {
                    paragraph: 'Procuration pour vendre'
                }
            ],
            image: [
                {
                    lien: 'di_mainlevee'
                },
                {
                    lien: 'di_procuration'
                }
            ]
        }
    ]

    portfolioCV : PortfolioCVBase [] = [
        {
            id: 'diplome',
            name: 'Diplôme',
            data: [
                {
                    label: 'BTS « collaborateur juriste notarial »',
                    place: 'Cité scolaire Georges de La Tour Nancy',
                    date: 'En cours'
                },
                {
                    label: 'Certification projet Voltaire',
                    place: 'Cité scolaire Georges de La Tour Nancy',
                    date: 'En cours'
                },
                {
                    label: 'Faculté de droit',
                    place: 'Faculté de Droit de Nancy',
                    date: '2022'
                },
                {
                    label: 'Baccalauréat Général Economique et sociale option politique',
                    place: 'Lycée Frédéric Chopin Nancy',
                    date: '2020'
                },
                {
                    label: 'Diplôme National du Brevet Collège',
                    place: 'Ernest Bichat Lunéville',
                    date: '2017'
                }
            ]
        },
        {
            id: 'exp_pro',
            name: 'Expériences Professionnelles',
            data: [
                {
                    label: 'Collaborateur Juriste Notarial',
                    place: 'SCP EULRY/DECORPS-SCHERBECK Lunéville',
                    date: '2022-2023'
                },
                {
                    label: 'Préparatrice de commande',
                    place: 'Carrefour Moncel-les-Lunéville',
                    date: '2022-2022'
                },
                {
                    label: 'Ouvreuse au théâtre (Accueil, placement du public, validation de billets, travail d\'équipe)',
                    place: 'Théâtre de Lunéville',
                    date: '2020-2022'
                },
                {
                    label: 'Aides scolaires pour les classes de CP à 3ème\nTemps scolaires',
                    place: 'ASAL centre social, centre aérer Lunéville',
                    date: '2020-2021'
                },
                {
                    label: 'Animatrice pour enfants \n Vacances scolaires',
                    place: 'Les Epis centre aérer Lunéville',
                    date: '2020-2022'
                },
                {
                    label: 'Tri de colis par régions + chargement de camions\nTravail de nuit',
                    place: 'Neolog Gondreville',
                    date: '2019-2020'
                },
                {
                    label: 'Rénovation de structure « écoles, résidence »\nVacances scolaires',
                    place: 'Mairie de Lunéville',
                    date: '2017-2022'
                },
                {
                    label: 'Animatrice pour enfants\nVacances scolaires',
                    place: 'ASAL centre social, centre aérer Lunéville',
                    date: '2016-2020'
                }
            ]
        },
        {
            id: 'exp_extrapro',
            name: 'Expériences Extra-Professionnelles',
            data: [
                {
                    label: 'Rénovation d\'appartements pour la SCI familiale\nVisite d\'appartements pour leur mise en location',
                    place: 'Lunéville',
                    date: '2017-2022'
                },
                {
                    label: 'Loisir : Lecture, football, danse',
                    place: '',
                    date: ''
                },
                {
                    label: 'Italien : intermédiaire',
                    place: '',
                    date: ''
                }
            ]
        }
    ]

    getAllKnowledge(): PortfolioKnowledge[] {
        return this.portfolioKnowledge
    }
    getAllCV(): PortfolioCVBase[] {
        return this.portfolioCV
    }
}
import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg',
            statusMenu: 'all'
        }
    });
};

export const dogs = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg',
            statusMenu: 'dog'
        }
    });

};

export const cats = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg',
            statusMenu: 'cat'
        }
    });

};

export const fishes = (req: Request, res: Response) => {

    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg',
            statusMenu: 'fish'
        }
    });

};
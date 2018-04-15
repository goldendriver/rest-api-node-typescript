import {Request, Response} from "express";

export class Routes {        

    public routes(app): void {    
        
        // Contact 
        app.route('/contact')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        })
        .post((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'POST request successfulll!!!!'
            })
        })

        // Contact detail
        app.route('/contact/:contactId')
        .put((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'PUT request successfulll!!!!'
            })
        })
        .delete((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'DELETE request successfulll!!!!'
            })
        })

    }
}
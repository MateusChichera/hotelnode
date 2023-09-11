class HomeController {
    
    homeView(req, res) {
        res.render('home/home', 
        {nome: 'fulvio fanelli', carros: 
        ["corolla", "uno", "landau", "marea turbo", "206"] });
    }
}

module.exports = HomeController;
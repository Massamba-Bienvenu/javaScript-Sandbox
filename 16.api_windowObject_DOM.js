/* 
API, Browser Object Model et interface Window
API : Application Programming Interface ou Interface de Programmation Applicative
est une interface ou  un ensemble de codes grâce à laquelle un logiciel fournit des services à des clients
permet à des personnes externes de pouvoir réaliser des opérations complexes en cachant justement cette complexité.


En JS deux grandes catégories :
1. Les API intégrées aux navigateurs web comme le DOM(Document Object Model): 
    qui va nous permettre de manipuler le HTML et le CSS d’une page
2. Les API externes, proposées par certains logiciels ou sites 
    comme la suite d’API Google Map qui permettent d’intégrer et de manipuler des cartes dans nos pages web


Browser Object Model (BOM) et l’objet Window
Le BOM est une sorte de « super API » 
A la base du BOM, nous avons l’interface Window qui représente 
une fenêtre de navigateur contenant une page ou un document.

BOM et les enfants de Window :
L’objet **Navigator** qui représente l’état et l’identité du navigateur et qu’on va utiliser avec l’API Geolocation ;
L’objet **History** qui permet de manipuler l’historique de navigation du navigateur
L’objet **Location** qui fournit des informations relatives à l’URL de la page courante ;
L’objet **Screen** qui nous permet d’examiner les propriétés de l’écran qui affiche la fenêtre courante ;
L’objet **Document** et le DOM dans son ensemble que nous étudierons en détail dans la suite.
*/

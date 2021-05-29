/*Demander à l’utilisateur un nombre compris entre 0 et 100
L’algorithme doit afficher la somme des nombres inférieur ou égal à ce nombre.
Par exemple, si l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15 
NB : on souhaite afficher uniquement le résultat, pas la décomposition du calcul*/
var nombre ;

var somme =0 ; 
do // boucle :  faire tant que 
{
    nombre= prompt (" Chosis un nombre entre 0 et 100") ; 
 
}while  ((isNaN(parseInt(nombre))== true) || (nombre > 100) || (nombre<0)); // condition recommencer
var nb = nombre
for (i=1 ; i<=nb ; i++)
{
    somme = parseInt(somme+nombre);
    nombre=nombre-1;
}
alert("la somme des nombres inférieur ou égal à " +nb + " est : " + somme);
/*  ou bien */
/*
var nombreUilisateur = -1;
		while (isNaN(nombreUilisateur) || nombreUilisateur <= 0 || nombreUilisateur >= 100) {
			nombreUilisateur = parseInt(prompt('veuillez entrer un nombre compris entre 0 et 100'));
		}
			
		var somme = 0;
		var indice = 1;
		do {
			somme += indice++; //somme = somme + indice; indice = indice + 1;
		} while (indice <= nombreUilisateur);
		
		alert("la somme des " + nombreUilisateur + " premiers nombres est de : " + somme);
        */
            


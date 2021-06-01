describe('Les chaines de caractères : ', function () {//on décrit la fonctionnalité
  // "it" indique le comportement attendu
    it('Donner la taille d\'une chaine de caractères', function () {
      // on crée un exemple
        var result = tailleString('toto');
        // on donne le reésultat attendu
        expect(result).toEqual(4);
    });

    it('Remplacer le premier e d\'une chaine par un espace', function () {
    var result = textString('Ce texte a une certaine taille');
    expect(result).toEqual('C  texte a une certaine taille');
     });
    //
  
    it('Concatener deux chaines de caractères', function () {
    var result = concatenedString('li');
    expect(result).toEqual('lili');
      });
    //
    it('Afficher le cinquième caractère d\'une chaine', function () {
      var result = charAtFiveString('fleurie');
      expect(result).toEqual('i');
    });
    //
    it('Afficher les 9 premiers caractères d\'une chaîne de caractère', function () {
      var result = nineFirstCharactersString('abcdefghijkl');
      expect(result).toEqual('abcdefghi');
    });
    //
    it('Mettre en majuscule la chaine', function () {
      var result = upperCaseString('abcdef');
      expect(result).toEqual('ABCDEF');
    });
    //
    it('Mettre en minuscule la chaine', function () {
      var result = lowerCaseString('ABCDEF');
      expect(result).toEqual('abcdef');
    });

    it('Supprimer les espaces avant et après la chaine', function () {
      var result = deleteSpaceString(' abcdef ');
      expect(result).toEqual('abcdef');
    });

    it('Afficher true si le parametre d\'entrée de la fonction est de type string', function () {
      var result = typeOfString('ABCDEF');
      expect(result).toEqual(true);
    });

    it('Afficher l\'extension du fichier', function () {
      var result = typeOfExtension('TDD.zip');
      expect(result).toEqual('zip');
    });

    it('Compter le nombre d\'espace dans la chaine', function () {
      var result = countNumberOfSpace('A B C D');
      expect(result).toEqual(3);
    });

    it('Inverser une chaine de caractères', function () {
      var result = reverseString('ABCDEF');
      expect(result).toEqual('FEDCBA');
    });
})

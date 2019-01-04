export function getShortMessage(obj) {
  if (Array.isArray(obj)) {
    const ArrayReturn = [];
    for ( const item of obj ) { 
        item.length < 50 ? ArrayReturn.push(item) : item
    }
    return (ArrayReturn);
  }
  return 'it not a Array';
}

// Javascript: pour ce second exercice, je vous demanderai d 'écrire une ;
// fonction "getShortMessage " ;
// qui prendra en argument un Array et qui retournera un Array contenant tous les messages ;
// dont la longueur est inférieure strictement à 50 caractères. (Array.prototype ) ;

function validateCard(str) {
  const data = {};
  const regex = /[^0-9]/g;
  const cardStrCompressed = str.replace(regex, '');
  data.isValid = (cardStrCompressed.length === 16);
  if (data.isValid) {
    data.cardStr = cardStrCompressed;
    const quads = [];
    for (let i = 0; i < 4; i++) {
      quads.push( cardStrCompressed.slice(i*4, (i+1)*4) );
    }
    data.cardStrForTTS = quads.join(' ');
  }
  return data;
};

exports.validateCard = validateCard;
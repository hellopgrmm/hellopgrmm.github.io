// Hello-Programming<C>2023-2025
// Website https://hellopgrmm.github.io/
// Welcome use.
function Reverse_L(strB){return strB.split('').reverse().join('');}function Encode(strA){var Mt = '';for(var CharCodeX = 0;CharCodeX < strA.length;CharCodeX++){var MtT_FtF2 = strA[CharCodeX].charCodeAt()*12;Mt+=MtT_FtF2+'-)-[]>';}                      return Reverse_L(Mt);}function Decode(strC){var ArrayOfOriginalStr = Reverse_L(strC).split('-)-[]>');var DecodeString_ = '';for(var Fet = 0;Fet < ArrayOfOriginalStr.length;Fet++){var EsmPlCc5C_NxLLF = ArrayOfOriginalStr[Fet]/12;var EsmPlN6yF_ExLFD = String.fromCharCode(EsmPlCc5C_NxLLF);DecodeString_+=EsmPlN6yF_ExLFD;}return DecodeString_;}

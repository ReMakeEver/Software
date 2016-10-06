var foureight = "0";var fournine = "1";var fivezero = "2";var fiveone = "3";var fivetwo = "4";var fivethree = "5";var fivefour = "6";var fivefive = "7";var fivesix = "8";var fiveseven = "9";
var sixfive = "A";var sixsix = "B";var sixseven = "C";var sixeight = "D";var sixnine = "E";var sevenzero = "F";var sevenone = "G";var seventwo = "H";var seventhree = "I";var sevenfour = "J";var sevenfive = "K";var sevensix = "L";var sevenseven = "M";var seveneight = "N";var sevennine = "O";var eightzero = "P";var eightone = "Q";var eighttwo = "R";var eightthree = "S";var eightfour = "T";var eightfive = "U";var eightsix = "V";var eightseven = "W";var eighteight = "X";var eightnine = "Y";var ninezero = "Z";
var nineseven = "a";var nineeight = "b";var ninenine = "c";var onezerozero = "d";var onezeroone = "e";var onezerotwo = "f";var onezerothree = "g";var onezerofour = "h";var onezerofive = "i";var onezerosix = "j";var onezeroseven = "k";var onezeroeight = "l";var onezeronine = "m";var oneonezero = "n";var oneoneone = "o";var oneonetwo = "p";var oneonethree = "q";var oneonefour = "r";var oneonefive = "s";var oneonesix = "t";var oneoneseven = "u";var oneoneeight = "v";var oneonenine = "w";var onetwozero = "x";var onetwoone = "y";var onetwotwo = "z";
var dash = "-";var dot = ".";var col = ":";var slash = "/";
var https = onezerofour+oneonesix+ononesix+oneonetwo+oneonefive+col+slash+slash;var com = dot+ninenine+oneoneone+onezeronine;
var web = onezerotwo+onezerofive+oneonefour+onezeroone+nineeight+nineseven+oneonefive+onezeroone+nineseven+oneonetwo+oneonetwo;
var io = onezerotwo+onezerofive+oneonefour+onezeroone+nineeight+nineseven+oneonefive+onezeroone+onezerofive+oneoneone;
var app = nineseven+oneonetwo+oneonetwo+oneonefive+oneonetwo+oneoneone+oneonesix;
var remadecoinKey = sixfive+onezeroeight+onetwotwo+nineseven+eightthree+onetwoone+sixeight+onezerotwo+oneonenine+dash+onezerotwo+sevennine+oneonefive+seveneight+eightthree+onezerotwo+oneoneseven+sevenfour+fiveseven+oneoneseven+fivefive+oneonetwo+oneonenine+sevenfive+onezeroone+onezeroseven+oneonetwo+seveneight+nineseven+sevensevevn+eightfour+fivetwo+foureight+onetwozero+eighteight+ninezero+sevenzero+sixnine+onezeroseven;
var remadecoinId = oneonefour+onezeroone+onezeronine+nineseven+onezerozero+onezeroone+ninenine+oneoneone+onezerofive+oneonezero;
var remadecoinAuthDomain = remadecoinId+dot+app+com;
var remadecoinDataUrl = https+remadecoinId+dot+io+com;
var remadecoinStorage = remadecoin+dot+app+com;
var databaseReMadeCoinConfig = {
 apiKey: remadecoinKey,
 authDomain: remadecoinAuthDomain,
 databaseUrl: remadecoinDataUrl,
 storageBucket: remadecoinStorage
};

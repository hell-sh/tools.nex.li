//qwertzuiopasdfghjklyxcvbnmQWERTZUIOPASDFGHJKLYXCVBNM1234567890!"§$%&/()=?*+~'#_-:.;,<>|^°@€
var alphabet=["q","w","e","r","t","z","u","i","o","p","a","s","d","f","g","h","j","k","l","y","x","c","v","b","n","m","Q","W","E","R","T","Z","U","I","O","P","A","S","D","F","G","H","J","K","L","Y","X","C","V","B","N","M","1","2","3","4","5","6","7","8","9","0","!","\"","§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
unholyAlphabets={
"A-cute":["q","ẃ","é","ŕ","t","ź","ú","í","ő","ṕ","á","ś","d","f","ǵ","h","j","ḱ","ĺ","ӳ","x","ć","v","b","ń","ḿ","Q","Ẃ","É","Ŕ","T","Ź","Ű","í","Ő","Ṕ","Á","ś","D","F","Ǵ","H","J","Ḱ","Ĺ","Ӳ","X","Ć","V","B","Ń","Ḿ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Bold":["𝐪","𝐰","𝐞","𝐫","𝐭","𝐳","𝐮","𝐢","𝐨","𝐩","𝐚","𝐬","𝐝","𝐟","𝐠","𝐡","𝐣","𝐤","𝐥","𝐲","𝐱","𝐜","𝐯","𝐛","𝐧","𝐦","𝐐","𝐖","𝐄","𝐑","𝐓","𝐙","𝐔","𝐈","𝐎","𝐏","𝐀","𝐒","𝐃","𝐅","𝐆","𝐇","𝐉","𝐊","𝐋","𝐘","𝐗","𝐂","𝐕","𝐁","𝐍","𝐌","𝟏","𝟐","𝟑","𝟒","𝟓","𝟔","𝟕","𝟖","𝟗","𝟎","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Bold Fraktur":["𝖖","𝖜","𝖊","𝖗","𝖙","𝖟","𝖚","𝖎","𝖔","𝖕","𝖆","𝖘","𝖉","𝖋","𝖌","𝖍","𝖏","𝖐","𝖑","𝖞","𝖝","𝖈","𝖛","𝖇","𝖓","𝖒","𝕼","𝖂","𝕰","𝕽","𝕿","𝖅","𝖀","𝕴","𝕺","𝕻","𝕬","𝕾","𝕯","𝕱","𝕲","𝕳","𝕵","𝕶","𝕷","𝖄","𝖃","𝕮","𝖁","𝕭","𝕹","𝕸","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Bold Italic":["𝒒","𝒘","𝒆","𝒓","𝒕","𝒛","𝒖","𝒊","𝒐","𝒑","𝒂","𝒔","𝒅","𝒇","𝒈","𝒉","𝒋","𝒌","𝒍","𝒚","𝒙","𝒄","𝒗","𝒃","𝒏","𝒎","𝑸","𝑾","𝑬","𝑹","𝑻","𝒁","𝑼","𝑰","𝑶","𝑷","𝑨","𝑺","𝑫","𝑭","𝑮","𝑯","𝑱","𝑲","𝑳","𝒀","𝑿","𝑪","𝑽","𝑩","𝑵","𝑴","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Bold Script":["𝓺","𝔀","𝓮","𝓻","𝓽","𝔃","𝓾","𝓲","𝓸","𝓹","𝓪","𝓼","𝓭","𝓯","𝓰","𝓱","𝓳","𝓴","𝓵","𝔂","𝔁","𝓬","𝓿","𝓫","𝓷","𝓶","𝓠","𝓦","𝓔","𝓡","𝓣","𝓩","𝓤","𝓘","𝓞","𝓟","𝓐","𝓢","𝓓","𝓕","𝓖","𝓗","𝓙","𝓚","𝓛","𝓨","𝓧","𝓒","𝓥","𝓑","𝓝","𝓜","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Boxed":["[̲̅q̲̅]","[̲̅w̲̅]","[̲̅e̲̅]","[̲̅r̲̅]","[̲̅t̲̅]","[̲̅z̲̅]","[̲̅u̲̅]","[̲̅i̲̅]","[̲̅o̲̅]","[̲̅p̲̅]","[̲̅a̲̅]","[̲̅s̲̅]","[̲̅d̲̅]","[̲̅f̲̅]","[̲̅g̲̅]","[̲̅h̲̅]","[̲̅j̲̅]","[̲̅k̲̅]","[̲̅l̲̅]","[̲̅y̲̅]","[̲̅x̲̅]","[̲̅c̲̅]","[̲̅v̲̅]","[̲̅b̲̅]","[̲̅n̲̅]","[̲̅m̲̅]","[̲̅Q̲̅]","[̲̅W̲̅]","[̲̅E̲̅]","[̲̅R̲̅]","[̲̅T̲̅]","[̲̅Z̲̅]","[̲̅U̲̅]","[̲̅I̲̅]","[̲̅O̲̅]","[̲̅P̲̅]","[̲̅A̲̅]","[̲̅S̲̅]","[̲̅D̲̅]","[̲̅F̲̅]","[̲̅G̲̅]","[̲̅H̲̅]","[̲̅J̲̅]","[̲̅K̲̅]","[̲̅L̲̅]","[̲̅Y̲̅]","[̲̅X̲̅]","[̲̅C̲̅]","[̲̅V̲̅]","[̲̅B̲̅]","[̲̅N̲̅]","[̲̅M̲̅]","[̲̅1̲̅]","[̲̅2̲̅]","[̲̅3̲̅]","[̲̅4̲̅]","[̲̅5̲̅]","[̲̅6̲̅]","[̲̅7̲̅]","[̲̅8̲̅]","[̲̅9̲̅]","[̲̅0̲̅]","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Boxes":["🅀","🅆","🄴","🅁","🅃","🅉","🅄","🄸","🄾","🄿","🄰","🅂","🄳","🄵","🄶","🄷","🄹","🄺","🄻","🅈","🅇","🄲","🅅","🄱","🄽","🄼","🅀","🅆","🄴","🅁","🅃","🅉","🅄","🄸","🄾","🄿","🄰","🅂","🄳","🄵","🄶","🄷","🄹","🄺","🄻","🅈","🅇","🄲","🅅","🄱","🄽","🄼","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Brackets":["『q』","『w』","『e』","『r』","『t』","『z』","『u』","『i』","『o』","『p』","『a』","『s』","『d』","『f』","『g』","『h』","『j』","『k』","『l』","『y』","『x』","『c』","『v』","『b』","『n』","『m』","『Q』","『W』","『E』","『R』","『T』","『Z』","『U』","『I』","『O』","『P』","『A』","『S』","『D』","『F』","『G』","『H』","『J』","『K』","『L』","『Y』","『X』","『C』","『V』","『B』","『N』","『M』","『1』","『2』","『3』","『4』","『5』","『6』","『7』","『8』","『9』","『0』","『!』",'『"』',"『§』","『$』","『%』","『&』","『/』","『(』","『)』","『=』","『?』","『*』","『+』","『~』","『'』","『#』","『_』","『-』","『:』","『.』","『;』","『,』","『<』","『>』","『|』","『^』","『°』","『@』","『€』"],
"Brackets (Filled)":["【q】","【w】","【e】","【r】","【t】","【z】","【u】","【i】","【o】","【p】","【a】","【s】","【d】","【f】","【g】","【h】","【j】","【k】","【l】","【y】","【x】","【c】","【v】","【b】","【n】","【m】","【Q】","【W】","【E】","【R】","【T】","【Z】","【U】","【I】","【O】","【P】","【A】","【S】","【D】","【F】","【G】","【H】","【J】","【K】","【L】","【Y】","【X】","【C】","【V】","【B】","【N】","【M】","【1】","【2】","【3】","【4】","【5】","【6】","【7】","【8】","【9】","【0】","【!】",'【"】',"【§】","【$】","【%】","【&】","【/】","【(】","【)】","【=】","【?】","【*】","【+】","【~】","【'】","【#】","【_】","【-】","【:】","【.】","【;】","【,】","【<】","【>】","【|】","【^】","【°】","【@】","【€】"],
"Bubbles":["ⓠ","ⓦ","ⓔ","ⓡ","ⓣ","ⓩ","ⓤ","ⓘ","ⓞ","ⓟ","ⓐ","ⓢ","ⓓ","ⓕ","ⓖ","ⓗ","ⓙ","ⓚ","ⓛ","ⓨ","ⓧ","ⓒ","ⓥ","ⓑ","ⓝ","ⓜ","Ⓠ","Ⓦ","Ⓔ","Ⓡ","Ⓣ","Ⓩ","Ⓤ","Ⓘ","Ⓞ","Ⓟ","Ⓐ","Ⓢ","Ⓓ","Ⓕ","Ⓖ","Ⓗ","Ⓙ","Ⓚ","Ⓛ","Ⓨ","Ⓧ","Ⓒ","Ⓥ","Ⓑ","Ⓝ","Ⓜ","①","②","③","④","⑤","⑥","⑦","⑧","⑨","0","!",'"',"§","$","%","&","⊘","(",")","⊜","?","⊛","⊕","~","'","#","_","⊖",":","⨀",";",",","⧀","⧁","⦶","^","°","@","€"],
"Bubbles (Filled)":["🅠","🅦","🅔","🅡","🅣","🅩","🅤","🅘","🅞","🅟","🅐","🅢","🅓","🅕","🅖","🅗","🅙","🅚","🅛","🅨","🅧","🅒","🅥","🅑","🅝","🅜","🅠","🅦","🅔","🅡","🅣","🅩","🅤","🅘","🅞","🅟","🅐","🅢","🅓","🅕","🅖","🅗","🅙","🅚","🅛","🅨","🅧","🅒","🅥","🅑","🅝","🅜","1","2","3","4","5","6","7","8","9","⓿","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"CJK+Thai":["q","w","乇","尺","ｲ","乙","u","ﾉ","o","ｱ","ﾑ","丂","d","ｷ","g","ん","ﾌ","ズ","ﾚ","ﾘ","ﾒ","c","√","乃","刀","ﾶ","q","w","乇","尺","ｲ","乙","u","ﾉ","o","ｱ","ﾑ","丂","d","ｷ","g","ん","ﾌ","ズ","ﾚ","ﾘ","ﾒ","c","√","乃","刀","ﾶ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Cozy":["ᑫ","ᗯ","E","ᖇ","T","ᘔ","ᑌ","I","O","ᑭ","ᗩ","ᔕ","ᗪ","ᖴ","G","ᕼ","ᒍ","K","ᒪ","Y","᙭","ᑕ","ᐯ","ᗷ","ᑎ","ᗰ","ᑫ","ᗯ","E","ᖇ","T","ᘔ","ᑌ","I","O","ᑭ","ᗩ","ᔕ","ᗪ","ᖴ","G","ᕼ","ᒍ","K","ᒪ","Y","᙭","ᑕ","ᐯ","ᗷ","ᑎ","ᗰ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Currency":["Q","₩","Ɇ","Ɽ","₮","Ⱬ","Ʉ","ł","Ø","₱","₳","₴","Đ","₣","₲","Ⱨ","J","₭","Ⱡ","Ɏ","Ӿ","₵","V","฿","₦","₥","Q","₩","Ɇ","Ɽ","₮","Ⱬ","Ʉ","ł","Ø","₱","₳","₴","Đ","₣","₲","Ⱨ","J","₭","Ⱡ","Ɏ","Ӿ","₵","V","฿","₦","₥","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Curvy 1":["۹","ฝ","ﻉ","ɼ","Շ","չ","પ","ٱ","ѻ","ρ","ค","ร","ɗ","ि","ﻭ","ɦ","ﻝ","ᛕ","ɭ","ץ","ซ","ƈ","۷","๒","ก","๓","۹","ฝ","ﻉ","ɼ","Շ","չ","પ","ٱ","ѻ","ρ","ค","ร","ɗ","ि","ﻭ","ɦ","ﻝ","ᛕ","ɭ","ץ","ซ","ƈ","۷","๒","ก","๓","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":","܁",";",",","<",">","|","^","°","@","€"],
"Curvy 2":["۹","ω","є","я","т","չ","υ","ι","σ","ρ","α","ѕ","∂","ƒ","ﻭ","н","נ","к","ℓ","у","χ","¢","ν","в","η","м","۹","ω","є","я","т","չ","υ","ι","σ","ρ","α","ѕ","∂","ƒ","ﻭ","н","נ","к","ℓ","у","χ","¢","ν","в","η","м","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Curvy 3":["ợ","ฬ","є","г","Շ","չ","ย","เ","๏","ק","ค","ร","๔","Ŧ","ﻮ","ђ","ן","к","ɭ","ץ","א","ς","ש","๒","ภ","๓","ợ","ฬ","є","г","Շ","չ","ย","เ","๏","ק","ค","ร","๔","Ŧ","ﻮ","ђ","ן","к","ɭ","ץ","א","ς","ש","๒","ภ","๓","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Dirty":["q","ẅ","ệ","ŕ","ẗ","ẓ","ü","ï","ö","ṗ","ä","ṩ","ď","ḟ","ġ","ḧ","j","ḳ","ŀ","ÿ","ẍ","ċ","ṿ","ḅ","ń","ṃ","Q","Ẅ","Ệ","Ŕ","Ṯ","Ẓ","Ü","Ï","Ö","Ṗ","Ä","Ṩ","Ď","Ḟ","Ġ","Ḧ","J","Ḳ","Ŀ","Ÿ","Ẍ","Ċ","Ṿ","Ḅ","Ń","Ṃ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Double-Struck":["𝕢","𝕨","𝕖","𝕣","𝕥","𝕫","𝕦","𝕚","𝕠","𝕡","𝕒","𝕤","𝕕","𝕗","𝕘","𝕙","𝕛","𝕜","𝕝","𝕪","𝕩","𝕔","𝕧","𝕓","𝕟","𝕞","ℚ","𝕎","𝔼","ℝ","𝕋","ℤ","𝕌","𝕀","𝕆","ℙ","𝔸","𝕊","𝔻","𝔽","𝔾","ℍ","𝕁","𝕂","𝕃","𝕐","𝕏","ℂ","𝕍","𝔹","ℕ","𝕄","𝟙","𝟚","𝟛","𝟜","𝟝","𝟞","𝟟","𝟠","𝟡","𝟘","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Fairy":["Ꭴ","Ꮗ","Ꮛ","Ꮢ","Ꮦ","ፚ","Ꮼ","Ꭵ","Ꭷ","Ꭾ","Ꮧ","Ꮥ","Ꮄ","Ꭶ","Ꮆ","Ꮒ","Ꮰ","Ꮶ","Ꮭ","Ꭹ","ጀ","ፈ","Ꮙ","Ᏸ","Ꮑ","Ꮇ","Ꭴ","Ꮗ","Ꮛ","Ꮢ","Ꮦ","ፚ","Ꮼ","Ꭵ","Ꭷ","Ꭾ","Ꮧ","Ꮥ","Ꮄ","Ꭶ","Ꮆ","Ꮒ","Ꮰ","Ꮶ","Ꮭ","Ꭹ","ጀ","ፈ","Ꮙ","Ᏸ","Ꮑ","Ꮇ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Faux Cyrillic":["q","ш","э","ѓ","т","z","ц","і","о","р","а","ѕ","ↁ","f","Б","Ђ","ј","к","l","Ў","х","с","v","ъ","и","м","Q","Щ","Є","Я","Г","Z","Ц","І","Ф","Р","Д","Ѕ","ↁ","F","Б","Н","Ј","Ќ","L","Ч","Ж","Ҁ","V","Б","И","М","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Faux Ethiopic":["ዒ","ሠ","ቿ","ዪ","ፕ","ጊ","ሁ","ጎ","ዐ","የ","ል","ነ","ዕ","ቻ","ኗ","ዘ","ጋ","ጕ","ረ","ሃ","ሸ","ር","ሀ","ጌ","ክ","ጠ","ዒ","ሠ","ቿ","ዪ","ፕ","ጊ","ሁ","ጎ","ዐ","የ","ል","ነ","ዕ","ቻ","ኗ","ዘ","ጋ","ጕ","ረ","ሃ","ሸ","ር","ሀ","ጌ","ክ","ጠ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Floor":["q̺","w̺","e̺","r̺","t̺","z̺","u̺","i̺","o̺","p̺","a̺","s̺","d̺","f̺","g̺","h̺","j̺","k̺","l̺","y̺","x̺","c̺","v̺","b̺","n̺","m̺","Q̺","W̺","E̺","R̺","T̺","Z̺","U̺","I̺","O̺","P̺","A̺","S̺","D̺","F̺","G̺","H̺","J̺","K̺","L̺","Y̺","X̺","C̺","V̺","B̺","N̺","M̺","1̺","2̺","3̺","4̺","5̺","6̺","7̺","8̺","9̺","0̺","!̺","\"̺","§̺","$̺","%̺","&̺","/̺","(̺",")̺","=̺","?̺","*̺","+̺","~̺","'̺","#̺","_̺","-̺",":̺",".̺",";̺",",̺","<̺",">̺","|̺","^̺","°̺","@̺","€̺"],
"Floor of Arrows":["q͎","w͎","e͎","r͎","t͎","z͎","u͎","i͎","o͎","p͎","a͎","s͎","d͎","f͎","g͎","h͎","j͎","k͎","l͎","y͎","x͎","c͎","v͎","b͎","n͎","m͎","Q͎","W͎","E͎","R͎","T͎","Z͎","U͎","I͎","O͎","P͎","A͎","S͎","D͎","F͎","G͎","H͎","J͎","K͎","L͎","Y͎","X͎","C͎","V͎","B͎","N͎","M͎","1͎","2͎","3͎","4͎","5͎","6͎","7͎","8͎","9͎","0͎","!͎","\"͎","§͎","$͎","%͎","&͎","/͎","(͎",")͎","=͎","?͎","*͎","+͎","~͎","'͎","#͎","_͎","-͎",":͎",".͎",";͎",",͎","<͎",">͎","|͎","^͎","°͎","@͎","€͎"],
"Floor of Asterisks":["q͙","w͙","e͙","r͙","t͙","z͙","u͙","i͙","o͙","p͙","a͙","s͙","d͙","f͙","g͙","h͙","j͙","k͙","l͙","y͙","x͙","c͙","v͙","b͙","n͙","m͙","Q͙","W͙","E͙","R͙","T͙","Z͙","U͙","I͙","O͙","P͙","A͙","S͙","D͙","F͙","G͙","H͙","J͙","K͙","L͙","Y͙","X͙","C͙","V͙","B͙","N͙","M͙","1͙","2͙","3͙","4͙","5͙","6͙","7͙","8͙","9͙","0͙","!͙","\"͙","§͙","$͙","%͙","&͙","/͙","(͙",")͙","=͙","?͙","*͙","+͙","~͙","'͙","#͙","_͙","-͙",":͙",".͙",";͙",",͙","<͙",">͙","|͙","^͙","°͙","@͙","€͙"],
"Floor of Pluses":["q̟","w̟","e̟","r̟","t̟","z̟","u̟","i̟","o̟","p̟","a̟","s̟","d̟","f̟","g̟","h̟","j̟","k̟","l̟","y̟","x̟","c̟","v̟","b̟","n̟","m̟","Q̟","W̟","E̟","R̟","T̟","Z̟","U̟","I̟","O̟","P̟","A̟","S̟","D̟","F̟","G̟","H̟","J̟","K̟","L̟","Y̟","X̟","C̟","V̟","B̟","N̟","M̟","1̟","2̟","3̟","4̟","5̟","6̟","7̟","8̟","9̟","0̟","!̟","\"̟","§̟","$̟","%̟","&̟","/̟","(̟",")̟","=̟","?̟","*̟","+̟","~̟","'̟","#̟","_̟","-̟",":̟",".̟",";̟",",̟","<̟",">̟","|̟","^̟","°̟","@̟","€̟"],
"Fraktur":["𝔮","𝔴","𝔢","𝔯","𝔱","𝔷","𝔲","𝔦","𝔬","𝔭","𝔞","𝔰","𝔡","𝔣","𝔤","𝔥","𝔧","𝔨","𝔩","𝔶","𝔵","𝔠","𝔳","𝔟","𝔫","𝔪","𝔔","𝔚","𝔈","ℜ","𝔗","ℨ","𝔘","ℑ","𝔒","𝔓","𝔄","𝔖","𝔇","𝔉","𝔊","ℌ","𝔍","𝔎","𝔏","𝔜","𝔛","ℭ","𝔙","𝔅","𝔑","𝔐","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Fullwidth":["ｑ","ｗ","ｅ","ｒ","ｔ","ｚ","ｕ","ｉ","ｏ","ｐ","ａ","ｓ","ｄ","ｆ","ｇ","ｈ","ｊ","ｋ","ｌ","ｙ","ｘ","ｃ","ｖ","ｂ","ｎ","ｍ","Ｑ","Ｗ","Ｅ","Ｒ","Ｔ","Ｚ","Ｕ","Ｉ","Ｏ","Ｐ","Ａ","Ｓ","Ｄ","Ｆ","Ｇ","Ｈ","Ｊ","Ｋ","Ｌ","Ｙ","Ｘ","Ｃ","Ｖ","Ｂ","Ｎ","Ｍ","１","２","３","４","５","６","７","８","９","０","！",'"',"§","＄","％","＆","／","（","）","＝","？","＊","＋","～","＇","＃","＿","－","：","．","；","，","<",">","｜","＾","°","＠","€"],
"Hand Writing 1":["𝓆","𝓌","𝑒","𝓇","𝓉","𝓏","𝓊","𝒾","𝑜","𝓅","𝒶","𝓈","𝒹","𝒻","𝑔","𝒽","𝒿","𝓀","𝓁","𝓎","𝓍","𝒸","𝓋","𝒷","𝓃","𝓂","𝒬","𝒲","𝐸","𝑅","𝒯","𝒵","𝒰","𝐼","𝒪","𝒫","𝒜","𝒮","𝒟","𝐹","𝒢","𝐻","𝒥","𝒦","𝐿","𝒴","𝒳","𝒞","𝒱","𝐵","𝒩","𝑀","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Hand Writing 2":["ϙ","ɯ","ҽ","ɾ","ƚ","ȥ","υ","ι","σ","ρ","α","ʂ","ԃ","ϝ","ɠ","ԋ","ʝ","ƙ","ʅ","ყ","x","ƈ","ʋ","Ⴆ","ɳ","ɱ","ϙ","ɯ","ҽ","ɾ","ƚ","ȥ","υ","ι","σ","ρ","α","ʂ","ԃ","ϝ","ɠ","ԋ","ʝ","ƙ","ʅ","ყ","x","ƈ","ʋ","Ⴆ","ɳ","ɱ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Inverted":["b","ʍ","ǝ","ɹ","ʇ","z","n","ı","o","d","ɐ","s","p","ɟ","ƃ","ɥ","ɾ","ʞ","ן","ʎ","x","ɔ","ʌ","q","u","ɯ","b","ʍ","ǝ","ɹ","ʇ","z","n","ı","o","d","ɐ","s","p","ɟ","ƃ","ɥ","ɾ","ʞ","ן","ʎ","x","ɔ","𐌡","q","u","ɯ","1","2","3","4","5","6","7","8","9","0","¡",'"',"§","$","%","⅋","/","(",")","=","¿","*","+","~",",","#","_","-",":",".",";","‘","<",">","|","^","°","@","€"],
"Knight":["q","ẇ","ḕ","ṙ","Ṯ","Ẓ","ṳ","ḭ","ṏ","Ṗ","Ḁ","Ṡ","Ḋ","ḟ","Ḡ","ḧ","j","Ḳ","Ḷ","ẏ","Ẍ","ḉ","Ṽ","ḃ","Ṇ","ṁ","Q","Ẇ","Ḕ","Ṙ","Ṯ","Ẓ","Ṳ","Ḭ","Ṏ","Ṗ","Ḁ","Ṡ","Ḋ","Ḟ","Ḡ","Ḧ","J","Ḳ","Ḷ","Ẏ","Ẍ","Ḉ","Ṽ","Ḃ","Ṇ","Ṁ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Magic":["q","Ꮃ","Ꭼ","Ꮢ","Ꮖ","Ꮓ","u","Ꭵ","Ꮎ","Ꮲ","Ꭺ","s","Ꭰ","f","Ꮆ","h","j","Ꮶ","Ꮮ","Ꮍ","x","Ꮯ","Ꮙ","b","Ꮑ","m","q","Ꮃ","Ꭼ","Ꮢ","Ꮖ","Ꮓ","u","Ꭵ","Ꮎ","Ꮲ","Ꭺ","s","Ꭰ","f","Ꮆ","h","j","Ꮶ","Ꮮ","Ꮍ","x","Ꮯ","Ꮙ","b","Ꮑ","m","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Monospace":["𝚚","𝚠","𝚎","𝚛","𝚝","𝚣","𝚞","𝚒","𝚘","𝚙","𝚊","𝚜","𝚍","𝚏","𝚐","𝚑","𝚓","𝚔","𝚕","𝚢","𝚡","𝚌","𝚟","𝚋","𝚗","𝚖","𝚀","𝚆","𝙴","𝚁","𝚃","𝚉","𝚄","𝙸","𝙾","𝙿","𝙰","𝚂","𝙳","𝙵","𝙶","𝙷","𝙹","𝙺","𝙻","𝚈","𝚇","𝙲","𝚅","𝙱","𝙽","𝙼","𝟷","𝟸","𝟹","𝟺","𝟻","𝟼","𝟽","𝟾","𝟿","𝟶","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Parenthesized":["⒬","⒲","⒠","⒭","⒯","⒵","⒰","⒤","⒪","⒫","⒜","⒮","⒟","⒡","⒢","⒣","⒥","⒦","⒧","⒴","⒳","⒞","⒱","⒝","⒩","⒨","⒬","⒲","⒠","⒭","⒯","⒵","⒰","⒤","⒪","⒫","⒜","⒮","⒟","⒡","⒢","⒣","⒥","⒦","⒧","⒴","⒳","⒞","⒱","⒝","⒩","⒨","⑴","⑵","⑶","⑷","⑸","⑹","⑺","⑻","⑼","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Regional Indicator":["🇶","🇼","🇪","🇷","🇹","🇿","🇺","🇮","🇴","🇵","🇦","🇸","🇩","🇫","🇬","🇭","🇯","🇰","🇱","🇾","🇽","🇨","🇻","🇧","🇳","🇲","🇶","🇼","🇪","🇷","🇹","🇿","🇺","🇮","🇴","🇵","🇦","🇸","🇩","🇫","🇬","🇭","🇯","🇰","🇱","🇾","🇽","🇨","🇻","🇧","🇳","🇲","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Reversed":["p","w","ɘ","ᴙ","T","z","U","i","o","q","A","ꙅ","b","ꟻ","g","H","j","k","l","Y","x","ↄ","v","d","ᴎ","m","p","W","Ǝ","ᴙ","T","Z","U","I","O","ꟼ","A","Ꙅ","b","ꟻ","G","H","J","K","⅃","Y","X","Ↄ","V","d","ᴎ","M","߁","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","⸮","*","+","∽","'","#","_","-",":",".","⁏",",","<",">","|","^","°","@","€"],
"Roof":[" ͆q"," ͆w"," ͆e"," ͆r"," ͆t"," ͆z"," ͆u"," ͆i"," ͆o"," ͆p"," ͆a"," ͆s"," ͆d"," ͆f"," ͆g"," ͆h"," ͆j"," ͆k"," ͆l"," ͆y"," ͆x"," ͆c"," ͆v"," ͆b"," ͆n"," ͆m"," ͆Q"," ͆W"," ͆E"," ͆R"," ͆T"," ͆Z"," ͆U"," ͆I"," ͆O"," ͆P"," ͆A"," ͆S"," ͆D"," ͆F"," ͆G"," ͆H"," ͆J"," ͆K"," ͆L"," ͆Y"," ͆X"," ͆C"," ͆V"," ͆B"," ͆N"," ͆M"," ͆1"," ͆2"," ͆3"," ͆4"," ͆5"," ͆6"," ͆7"," ͆8"," ͆9"," ͆0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Rock Dots":["q","ẅ","ë","ṛ","ẗ","ż","ü","ï","ö","ṗ","ä","ṡ","ḋ","ḟ","ġ","ḧ","j","ḳ","ḷ","ÿ","ẍ","ċ","ṿ","ḅ","ṅ","ṁ","Q","Ẅ","Ё","Ṛ","Ṫ","Ż","Ü","Ї","Ö","Ṗ","Ä","Ṡ","Ḋ","Ḟ","Ġ","Ḧ","J","Ḳ","Ḷ","Ÿ","Ẍ","Ċ","Ṿ","Ḅ","Ṅ","Ṁ","1","2","ӟ","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","⸚",":","∵",";",",","<",">","|","^","°","@","€"],
"Sans":["𝗊","𝗐","𝖾","𝗋","𝗍","𝗓","𝗎","𝗂","𝗈","𝗉","𝖺","𝗌","𝖽","𝖿","𝗀","𝗁","𝗃","𝗄","𝗅","𝗒","𝗑","𝖼","𝗏","𝖻","𝗇","𝗆","𝖰","𝖶","𝖤","𝖱","𝖳","𝖹","𝖴","𝖨","𝖮","𝖯","𝖠","𝖲","𝖣","𝖥","𝖦","𝖧","𝖩","𝖪","𝖫","𝖸","𝖷","𝖢","𝖵","𝖡","𝖭","𝖬","𝟣","𝟤","𝟥","𝟦","𝟧","𝟨","𝟩","𝟪","𝟫","𝟢","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Sans Bold":["𝗾","𝘄","𝗲","𝗿","𝘁","𝘇","𝘂","𝗶","𝗼","𝗽","𝗮","𝘀","𝗱","𝗳","𝗴","𝗵","𝗷","𝗸","𝗹","𝘆","𝘅","𝗰","𝘃","𝗯","𝗻","𝗺","𝗤","𝗪","𝗘","𝗥","𝗧","𝗭","𝗨","𝗜","𝗢","𝗣","𝗔","𝗦","𝗗","𝗙","𝗚","𝗛","𝗝","𝗞","𝗟","𝗬","𝗫","𝗖","𝗩","𝗕","𝗡","𝗠","𝟭","𝟮","𝟯","𝟰","𝟱","𝟲","𝟳","𝟴","𝟵","𝟬","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Sans Bold Italic":["𝙦","𝙬","𝙚","𝙧","𝙩","𝙯","𝙪","𝙞","𝙤","𝙥","𝙖","𝙨","𝙙","𝙛","𝙜","𝙝","𝙟","𝙠","𝙡","𝙮","𝙭","𝙘","𝙫","𝙗","𝙣","𝙢","𝙌","𝙒","𝙀","𝙍","𝙏","𝙕","𝙐","𝙄","𝙊","𝙋","𝘼","𝙎","𝘿","𝙁","𝙂","𝙃","𝙅","𝙆","𝙇","𝙔","𝙓","𝘾","𝙑","𝘽","𝙉","𝙈","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Sans Italic":["𝘲","𝘸","𝘦","𝘳","𝘵","𝘻","𝘶","𝘪","𝘰","𝘱","𝘢","𝘴","𝘥","𝘧","𝘨","𝘩","𝘫","𝘬","𝘭","𝘺","𝘹","𝘤","𝘷","𝘣","𝘯","𝘮","𝘘","𝘞","𝘌","𝘙","𝘛","𝘡","𝘜","𝘐","𝘖","𝘗","𝘈","𝘚","𝘋","𝘍","𝘎","𝘏","𝘑","𝘒","𝘓","𝘠","𝘟","𝘊","𝘝","𝘉","𝘕","𝘔","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Slashed":["q̷","w̷","e̷","r̷","t̷","z̷","u̷","i̷","o̷","p̷","a̷","s̷","d̷","f̷","g̷","h̷","j̷","k̷","l̷","y̷","x̷","c̷","v̷","b̷","n̷","m̷","Q̷","W̷","E̷","R̷","T̷","Z̷","U̷","I̷","O̷","P̷","A̷","S̷","D̷","F̷","G̷","H̷","J̷","K̷","L̷","Y̷","X̷","C̷","V̷","B̷","N̷","M̷","1̷","2̷","3̷","4̷","5̷","6̷","7̷","8̷","9̷","0̷","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Small Caps":["q","ᴡ","ᴇ","ʀ","ᴛ","ᴢ","ᴜ","ɪ","ᴏ","ᴩ","ᴀ","ꜱ","ᴅ","ꜰ","ɢ","ʜ","ᴊ","ᴋ","ʟ","y","x","ᴄ","ᴠ","ʙ","ɴ","ᴍ","Q","ᴡ","ᴇ","ʀ","ᴛ","ᴢ","ᴜ","ɪ","ᴏ","ᴩ","ᴀ","ꜱ","ᴅ","ꜰ","ɢ","ʜ","ᴊ","ᴋ","ʟ","Y","x","ᴄ","ᴠ","ʙ","ɴ","ᴍ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Sorcerer":["զ","ա","ɛ","ʀ","ȶ","ʐ","ʊ","ɨ","օ","ք","ǟ","ֆ","ɖ","ʄ","ɢ","ɦ","ʝ","ӄ","ʟ","ʏ","Ӽ","ƈ","ʋ","ɮ","ռ","ʍ","զ","ա","ɛ","ʀ","ȶ","ʐ","ʊ","ɨ","օ","ք","ǟ","ֆ","ɖ","ʄ","ɢ","ɦ","ʝ","ӄ","ʟ","ʏ","Ӽ","ƈ","ʋ","ɮ","ռ","ʍ","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Squares":["🅀","🅆","🄴","🅁","🅃","🅉","🅄","🄸","🄾","🄿","🄰","🅂","🄳","🄵","🄶","🄷","🄹","🄺","🄻","🅈","🅇","🄲","🅅","🄱","🄽","🄼","🅀","🅆","🄴","🅁","🅃","🅉","🅄","🄸","🄾","🄿","🄰","🅂","🄳","🄵","🄶","🄷","🄹","🄺","🄻","🅈","🅇","🄲","🅅","🄱","🄽","🄼","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","⧄","(",")","=","?","⧆","⊞","~","'","#","_","⊟",":","⊡",";",",","<",">","|","^","°","@","€"],
"Squares (Filled)":["🆀","🆆","🅴","🆁","🆃","🆉","🆄","🅸","🅾","🅿","🅰","🆂","🅳","🅵","🅶","🅷","🅹","🅺","🅻","🆈","🆇","🅲","🆅","🅱","🅽","🅼","🆀","🆆","🅴","🆁","🆃","🆉","🆄","🅸","🅾","🅿","🅰","🆂","🅳","🅵","🅶","🅷","🅹","🅺","🅻","🆈","🆇","🅲","🆅","🅱","🅽","🅼","1","2","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Stinky":[" ̾q"," ̾w"," ̾e"," ̾r"," ̾t"," ̾z"," ̾u"," ̾i"," ̾o"," ̾p"," ̾a"," ̾s"," ̾d"," ̾f"," ̾g"," ̾h"," ̾j"," ̾k"," ̾l"," ̾y"," ̾x"," ̾c"," ̾v"," ̾b"," ̾n"," ̾m"," ̾Q"," ̾W"," ̾E"," ̾R"," ̾T"," ̾Z"," ̾U"," ̾I"," ̾O"," ̾P"," ̾A"," ̾S"," ̾D"," ̾F"," ̾G"," ̾H"," ̾J"," ̾K"," ̾L"," ̾Y"," ̾X"," ̾C"," ̾V"," ̾B"," ̾N"," ̾M"," ̾1"," ̾2"," ̾3"," ̾4"," ̾5"," ̾6"," ̾7"," ̾8"," ̾9"," ̾0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Strikethrough":["q̶","w̶","e̶","r̶","t̶","z̶","u̶","i̶","o̶","p̶","a̶","s̶","d̶","f̶","g̶","h̶","j̶","k̶","l̶","y̶","x̶","c̶","v̶","b̶","n̶","m̶","Q̶","W̶","E̶","R̶","T̶","Z̶","U̶","I̶","O̶","P̶","A̶","S̶","D̶","F̶","G̶","H̶","J̶","K̶","L̶","Y̶","X̶","C̶","V̶","B̶","N̶","M̶","1̶","2̶","3̶","4̶","5̶","6̶","7̶","8̶","9̶","0̶","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Stroked":["ꝗ","w","ɇ","ɍ","ŧ","ƶ","ᵾ","ɨ","ø","ᵽ","Ⱥ","s","đ","f","ǥ","ħ","ɉ","ꝁ","ł","ɏ","x","ȼ","v","ƀ","n","m","Ꝗ","W","Ɇ","Ɍ","Ŧ","Ƶ","ᵾ","Ɨ","Ø","Ᵽ","Ⱥ","S","Đ","F","Ǥ","Ħ","Ɉ","Ꝁ","Ł","Ɏ","X","Ȼ","V","Ƀ","N","M","1","ƻ","3","4","5","6","7","8","9","0","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Subscript":["q","w","ₑ","ᵣ","ₜ","z","ᵤ","ᵢ","ₒ","ₚ","ₐ","ₛ","d","f","g","ₕ","ⱼ","ₖ","ₗ","y","ₓ","c","ᵥ","b","ₙ","ₘ","Q","W","ₑ","ᵣ","ₜ","Z","ᵤ","ᵢ","ₒ","ₚ","ₐ","ₛ","D","F","G","ₕ","ⱼ","ₖ","ₗ","Y","ₓ","C","ᵥ","B","ₙ","ₘ","₁","₂","₃","₄","₅","₆","₇","₈","₉","₀","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Superscript":["q","ʷ","ᵉ","ʳ","ᵗ","ᶻ","ᵘ","ⁱ","ᵒ","ᵖ","ᵃ","ˢ","ᵈ","ᶠ","ᵍ","ʰ","ʲ","ᵏ","ˡ","ʸ","ˣ","ᶜ","ᵛ","ᵇ","ⁿ","ᵐ","Q","ᵂ","ᴱ","ᴿ","ᵀ","ᶻ","ᵁ","ᴵ","ᴼ","ᴾ","ᴬ","ˢ","ᴰ","ᶠ","ᴳ","ᴴ","ᴶ","ᴷ","ᴸ","ʸ","ˣ","ᶜ","ⱽ","ᴮ","ᴺ","ᴹ","¹","²","³","⁴","⁵","⁶","⁷","⁸","⁹","⁰","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Tilde Strikethrough":["q̴","w̴","e̴","r̴","t̴","z̴","u̴","i̴","o̴","p̴","a̴","s̴","d̴","f̴","g̴","h̴","j̴","k̴","l̴","y̴","x̴","c̴","v̴","b̴","n̴","m̴","Q̴","W̴","E̴","R̴","T̴","Z̴","U̴","I̴","O̴","P̴","A̴","S̴","D̴","F̴","G̴","H̴","J̴","K̴","L̴","Y̴","X̴","C̴","V̴","B̴","N̴","M̴","1̴","2̴","3̴","4̴","5̴","6̴","7̴","8̴","9̴","0̴","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Underline":["q̲","w̲","e̲","r̲","t̲","z̲","u̲","i̲","o̲","p̲","a̲","s̲","d̲","f̲","g̲","h̲","j̲","k̲","l̲","y̲","x̲","c̲","v̲","b̲","n̲","m̲","Q̲","W̲","E̲","R̲","T̲","Z̲","U̲","I̲","O̲","P̲","A̲","S̲","D̲","F̲","G̲","H̲","J̲","K̲","L̲","Y̲","X̲","C̲","V̲","B̲","N̲","M̲","1̲","2̲","3̲","4̲","5̲","6̲","7̲","8̲","9̲","0̲","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
"Underline x2":["q̳","w̳","e̳","r̳","t̳","z̳","u̳","i̳","o̳","p̳","a̳","s̳","d̳","f̳","g̳","h̳","j̳","k̳","l̳","y̳","x̳","c̳","v̳","b̳","n̳","m̳","Q̳","W̳","E̳","R̳","T̳","Z̳","U̳","I̳","O̳","P̳","A̳","S̳","D̳","F̳","G̳","H̳","J̳","K̳","L̳","Y̳","X̳","C̳","V̳","B̳","N̳","M̳","1̳","2̳","3̳","4̳","5̳","6̳","7̳","8̳","9̳","0̳","!",'"',"§","$","%","&","/","(",")","=","?","*","+","~","'","#","_","-",":",".",";",",","<",">","|","^","°","@","€"],
}

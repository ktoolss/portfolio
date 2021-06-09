class Log{
    static cat() {
        console.log("   /\\_/\\\n"+
                    "   >^.^<.---.\n"+
                    "  _'-`-'     )\\\n"+
                    " (6--\\ |--\\ (`.`-.\n"+
                    "     --'  --'  ``-'\n");
    }

    static penguin(){
        console.log("(o<\n"+
                    "//\\\n"+
                    "V_/_ \n");
    }

    static turtle(){
        console.log("    ____\n"+
                    " __/-^-^\\\n"+
                    "(' )^-^-^\\)\n"+
                    " `^UU^^UU^"
        );
    }

    static dinosaur(){
        console.log("               __\n"+
                    "              / _)\n"+
                    "     _/\\/\\/\\_/ /\n"+
                    "   _|         /\n"+
                    " _|  (  | (  |\n"+
                    "/__.-'|_|--|_|");
    }

    static cow(){
        console.log("         __n__n__\n"+
                    "  .------`-\\00/-'\n"+
                    " /  ##  ## (oo)\n"+
                    "/ \\## __   ./\n"+
                    "   |//YY \\|/\n"+
                    "   |||   |||");
    }

    static unicorn(){
        console.log('                               /\n'+
                    '                    __       //\n'+
                    '                    -\\= \\=\\ //\n'+
                    '                  --=_\\=---//=--\n'+
                    '                -_==/  \\/ //\\/--\n'+
                    '                 ==/   /O   O\\==--\n'+
                    '    _ _ _ _     /_/    \  ]  /--\n'+
                    '   /\\ ( (- \\    /       ] ] ]==-\n'+
                    '  (\\ _\\_\\_\\-\\__/     \  (,_,)--\n'+
                    ' (\\_/                 \\     \\-\n'+
                    ' \\/      /       (   ( \\  ] /)\n'+
                    ' /      (         \\   \\_ \\./ )\n'+
                    ' (       \\         \\      )  \\\n'+
                    ' (       /\\_ _ _ _ /---/ /\\_  \\\n'+
                    '  \\     / \\     / ____/ /   \\  \\\n'+
                    '   (   /   )   / /  /__ )   (  )\n'+
                    '   (  )   / __/ \'---`       / /\n'+
                    '   \\  /   \\ \\             _/ /\n'+
                    '   ] ]     )_\\_         /__\\/\n'+
                    '   /_\\     ]___\\\n'+
                    '  (___)');
    }

    static dog(){
        console.log('          __\n'+
                    ' \\ ______/ V`-,\n'+
                    '  }        /~~\n'+
                    " /_)^ --,r'\n"+
                    '|b      |b\n');
    }

    static bunny(){
        console.log('           /\\ /|\n'+
                    '          |||| |\n'+
                    '           \\ | \\\n'+
                    '       _ _ /  @ @\n'+
                    '     /    \   =>X<=\n'+
                    '   /|      |   /\n'+
                    '   \\|     /__| |\n'+
                    '     \\_____\\ \\__\\')
    }

    static giraffe(){
        console.log('    /)/)\n'+
                    '   ( ..\\\n'+
                    "   /'-._)\n"+
                    '  /#/\n'+
                    ' /#/')
    }

    static lion(){
        console.log('   .~ ~ ~.\n'+
                    ' (  o,,,o  )\n'+
                    '(   ). .(   )\n'+
                    ' \\  { v }  /\n'+
                    "   ~ `v' ~");
    }

    static owl(){
        console.log('   .___,   \n'+
                    "___('v')___\n"+
                    '`\"-\\._./-\"\'\n'+
                    '    ^ ^  ');
    }

    static parrot(){
        console.log('     (\\    ___\n'+
                    '    (  \\  /(o)\\  \n'+
                    '    (   \\/  ()/_/)\n'+
                    '     (   `;.))\'".) \n'+
                    '   =====))=))===() \n'+
                    '     ///\'     \n'+
                    '    // \n'+
                    '   \'     ')
        }

    

    static zoo(first = '                 ', second = '                  ' ,third = '                  '){
        
        if(first.length<=17 && second.length<=18 && third.length<=18){
            
            if(first.length<17){
                var missing1 = 17 - first.length
                for (var a = 0; a < missing1; a++) {
                    first = first + ' '
                } 
            }
            
            if(second.length<18){
                var missing2 = 18 - second.length
                for (var b = 0; b < missing2; b++) {
                    second = second + ' '
                } 
            }
            
            if(third.length<18){
                var missing3 = 18 - third.length
                for (var c = 0; c < missing3; c++) {
                    third = third + ' '
                } 
            }

            console.log('                .-----------------._,,\n'+
                        '                |'+first+'(_")=\n'+
                        '                |'+second+'|||\n'+
                        '                |'+third+'||#\\_____       .-/  \\\n'+
                        "         ssgg   |------------------|\\# # # #\\    .''  ..'----,_\n"+
                        "    ____SG ..]  |       |/         | \\##_#_#/\\ =:.'-\\         )\\\n"+
                        ' ,-( _   SS(_9)_|      _(")        | |/|/\\|\\|   ::   |  ,_   /  `\n'+
                        '/ (_____;-.____;;    o(_,\\\\        | I I  I I    `   [|_/\\\\_]')
        }

        if(first.length>17){
            console.log("[log.pets error zoo()] Text too big for first line. Max:17 characters")
        }

        
        if(second.length>18){
            console.log("[log.pets error zoo()] Text too big for second line. Max:18 characters")
        }

        
        if(third.length>18){
            console.log("[log.pets error zoo()] Text too big for third line. Max:18 characters")
        }

    };

    static nyan() {

        var frame1 = () => {
            return new Promise((resolve) => {
                process.stdout.write("\x1b[31m"+'**********');process.stdout.write("\x1b[37m"+',------,\n');
                process.stdout.write("\x1b[33m"+'#########');process.stdout.write("\x1b[37m"+'v|   /\\_/\\\n' );
                process.stdout.write("\x1b[36m"+'==========');process.stdout.write("\x1b[37m"+'|__( ^ W^)\n');
                process.stdout.write('        ');process.stdout.write("\x1b[37m"+'    "  "');
                setTimeout(() => {
                    process.stdout.write('\x1Bc')
                    resolve()
                }, 70);
            })
        }

        var frame2 = () => {
            return new Promise((resolve) => {
                process.stdout.write("\x1b[36m"+'==========');process.stdout.write("\x1b[37m"+',------,\n');
                process.stdout.write("\x1b[31m"+'*********');process.stdout.write("\x1b[37m"+'~|    /\\_/\\\n');
                process.stdout.write("\x1b[33m"+'##########');process.stdout.write("\x1b[37m"+'|___( ^ W^)\n');
                process.stdout.write("        ");process.stdout.write('     "  "');
                setTimeout(() => {
                    process.stdout.write('\x1Bc')
                    resolve()
                }, 70);
            })
        }

        var frame3 = () => {
            return new Promise((resolve) => {
                process.stdout.write("\x1b[33m"+'#########');process.stdout.write("\x1b[37m"+' ,------,\n');
                process.stdout.write("\x1b[36m"+'=========');process.stdout.write("\x1b[37m"+'^|    /\\_/\\\n');
                process.stdout.write("\x1b[31m"+'*********');process.stdout.write("\x1b[37m"+' |___( ^ W^)\n');
                process.stdout.write("        ");process.stdout.write('      "  "');
                setTimeout(() => {
                    process.stdout.write('\x1Bc')
                    resolve()
                }, 70);
            })
        }

        var fun = () => {
            frame1().then(() => {
                frame2().then(() => {
                    frame3().then(() => {
                        frame2().then(fun)
                    })
                })
            })
        }

        fun()
    }
}

module.exports = Log
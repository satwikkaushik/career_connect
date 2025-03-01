%{
#include <stdio.h>
#include <stdlib.h>
%}

%%
"<"[^>]*">"  ;  // Match HTML tags
.       { putchar(yytext[0]); } // Print other characters
\n      { putchar('\n'); } // Preserve newlines
%%

int main() {
    yylex();
    return 0;
}

int yywrap() {
    return 1;
}